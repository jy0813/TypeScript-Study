{
  /**
   * Enum - 가능하면 사용 x, 타입이 정확하게 보장되지 않음
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CASS = 10;
  const DAYS_ENUM = Object.freeze(({
    "MONDAY":0,
    "TUESDAY":1,
  }))
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum DAYS {
    Monday,
    Tuesday
  }

  // Union Type 으로 대체 가능
  type DaysOfWeek = 'Monday' | 'Tuesday';
  let daysOfWeek: DaysOfWeek = 'Monday'
  daysOfWeek = 'Tuesday'

  console.log(DAYS.Tuesday)
}