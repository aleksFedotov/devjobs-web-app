/* eslint-disable @next/next/no-img-element */

import React from 'react';

import Link from 'next/link';

import { JobCard, LogoWrapper, JobSummary } from './JobStyles';

import { IJob } from '../../../@types/type';

const Job: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <JobCard
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <LogoWrapper bg={job.logoBackground}>
        <img src={job.logo} alt={`${job.company} logo`} />
      </LogoWrapper>
      <JobSummary>
        <p>
          <span>{job.postedAt}</span>
          <span>&#x02022;</span>
          <span>{job.contract}</span>
        </p>
        <Link href={`/details/${job.id}`} passHref>
          <h2>{job.position}</h2>
        </Link>
        <p>{job.company}</p>
      </JobSummary>
      <h3>{job.location}</h3>
    </JobCard>
  );
};

export default Job;
