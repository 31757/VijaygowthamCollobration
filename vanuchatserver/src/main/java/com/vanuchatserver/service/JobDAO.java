package com.vanuchatserver.service;

import java.util.List;

import com.vanuchatserver.model.Job;
import com.vanuchatserver.model.JobApplication;

public interface JobDAO
{
	public boolean postjob(Job job);
	
	public boolean updatejob(Job job);
	
	public List<Job> getAllVacancies();
	
	public boolean applyforjob(JobApplication jobapplication);
	
	public boolean updatejobapplication(JobApplication jobapplication);
	
	public JobApplication getJobApplication(String useremail, int jobid);

	public List<JobApplication> listAllAppliedJobs(String useremail);
}
