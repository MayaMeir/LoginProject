 const columns =  [
      {
        Header: 'Projects',
        columns: [
          {
            Header: 'Project Id',
            accessor: 'id',
          },
          {
            Header: 'Project Name',
            accessor: 'name',
          },
          {
            Header: 'Poject Score',
            accessor: 'score',
          },
          {
            Header: 'Duration In Days',
            accessor: 'durationInDays',
          },
          {
            Header: 'Bugs Count',
            accessor: 'bugsCount',
          },
          {
            Header: 'Made Deadline',
            accessor: 'madeDadeline',
          },
        ],
      }
    ]

    export default columns;