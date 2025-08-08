export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 3,
    label: 'Key Development Projects'
  },
  {
    value: 10,
    label: 'Specialized Departments'
  },
  {
    value: 5,
    label: 'Core Financial Services'
  },
  {
    value: 5,
    suffix: '+',
    label: 'Development Partners'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 3,
    label: 'Key Projects'
  },
  {
    value: 27,
    label: 'LGAs Covered'
  },
  {
    value: 10,
    label: 'Specialized Departments'
  },
  {
    value: 5,
    label: 'Core Services'
  }
];
