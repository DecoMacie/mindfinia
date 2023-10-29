function WorkFlow({ jobs, index }) {
  const job = jobs[index];

  return (
    <div className="relative">
      <div className="flex flex-row justify-between items-baseline">
        <div className="flex flex-row">
          <div className="interFont text-lg font-bold text-cyan-400">{`#${
            index + 1
          }`}</div>
          <div className="ml-3 syneFont text-lg font-medium">{job.title}</div>
        </div>
        <div className="interFont text-4xl font-bold text-gray-300">{`0${
          index + 1
        }`}</div>
      </div>
      <div className="my-4 rubikFont text-sm font-normal">{job.content}</div>
    </div>
  );
}

export default WorkFlow;
