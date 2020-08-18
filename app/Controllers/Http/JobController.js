'use strict'
const Job = use('App/Models/Job');  

class JobController {
    async home({view}){

        // //Create a job
        // const job = new Job;
        // job.title = 'My job title';
        // job.link = 'http://google.com';
        // job.description = 'My job description';

        // //executes and take these the info above and place it into the database
        // await job.save();

        //fetch a job
        //gets all the jobs
        const jobs = await Job.all();

        return view.render('index', { jobs: jobs.toJSON() });
    }
}

module.exports = JobController
