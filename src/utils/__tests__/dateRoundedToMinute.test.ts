import dateRoundedToMinute from '../dateRoundedToMinute';

describe('utils/dateRoundedToMinute', () => {
  it('should round dates to the specified interval', () => {
    const josephsBirthday = dateRoundedToMinute(
      15,
      new Date('July 12, 1986, 06:13:00')
    );
    const bday15 = new Date('July 12, 1986, 06:15:00');
    const bday30 = new Date('July 12, 1986, 06:30:00');
    const bday60 = new Date('July 12, 1986, 06:00:00');

    expect(dateRoundedToMinute(15, josephsBirthday).toString()).toBe(
      bday15.toString()
    );
    expect(dateRoundedToMinute(30, josephsBirthday).toString()).toBe(
      bday30.toString()
    );
    expect(dateRoundedToMinute(60, josephsBirthday).toString()).toBe(
      bday60.toString()
    );
  });
});
