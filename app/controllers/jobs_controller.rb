class JobsController < ApplicationController
  before_action :set_job, only: [:show, :edit, :update, :destroy]

  respond_to :json, only: [:index, :show, :new, :create]

  # GET /jobs
  def index
    @jobs = Job.all.order(date_received: :desc)

    respond_to do |format|
      format.html { render react_component: 'TableWrapper', props: table_props }
      format.json { render :json => select_format(@jobs) }
    end
  end

  # GET /jobs/1
  def show
  end

  # GET /jobs/new
  def new
    @job = Job.new({ case_id: params[:case], date_received: Date.today, status: :received })
    form_repsonse(form_props)
  end

  # GET /jobs/1/edit
  def edit
    form_repsonse(form_props)
  end

  # POST /jobs
  def create
    @job = Job.new(job_params)

    if @job.save
      render json: { resource: @job, redirect: jobs_path() }
    else
      render json: { job: @job.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jobs/1
  def update
    if @job.update(job_params)
      render json: { resource: @job, redirect: jobs_path() }
    else
      render json: { job: @job.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /jobs/1
  def destroy
    @job.destroy
    redirect_to jobs_url, notice: 'Job was successfully destroyed.'
  end

private

  def set_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:key, :case_id, :status, :date_sent, :date_received, :amount_cents, :notes)
  end

  def form_props
    cases  = select_format Case.all().order(:key)
    status = select_format Job.statuses.keys, :to_s, :titlecase

    {
      :type     => 'jobs',
      :resource => @job,
      :action   => polymorphic_path(@job),
      :selections => {
        :cases  => cases,
        :status => status,
      }
    }
  end

  def table_props
    {
      :sort_col => :recieved_date,
      :type     => 'jobs',
      :rows     => @jobs.map { |j| JobSerializer.new(j) },
      :columns => {
        :key           => 'ID',
        :status_name   => 'Status',
        :case_title    => 'Case',
        :recieved_date => 'Date Recieved',
        :sent_date     => 'Date Sent',
        :notes         => 'Notes',
        :actions       => ''
      }.to_a
    }
  end
end
