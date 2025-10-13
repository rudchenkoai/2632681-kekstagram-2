const checkLengthString = (string, maxLength) => string.length <= maxLength;

const checkPalindrome = (string) => {
  const normalString = string.replaceAll(' ','').toLowerCase();
  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0 ; i--) {
    reverseString += normalString[i];
  }
  return normalString === reverseString;
};


const extractNumbers = (string) => {
  const normalString = string.toString().replaceAll(' ','');
  let stringNumbers = '';
  for (let i = 0; i < normalString.length ; i++) {
    if (normalString[i] >= 0 && normalString[i] <= 9) {
      stringNumbers += normalString[i];
    }
  }
  return parseInt(stringNumbers, 10);
};

checkLengthString ('дом мод',5);
checkPalindrome ('дом мод');
extractNumbers ('2 счастливых гуся и 11 гусынь');


const checkLengthMeeting = (startWorkingTime, endtWorkingTime, startMeetingTime, lengthMeetingMinutes) => {
  const hourInMinutes = 60;

  const startWorkingMinutes = Number((startWorkingTime.split(':'))[0] * hourInMinutes) + Number((startWorkingTime.split(':'))[1]);

  const endWorkingMinutes = Number((endtWorkingTime.split(':'))[0] * hourInMinutes) + Number((endtWorkingTime.split(':'))[1]);

  const meetingMinutes = Number((startMeetingTime.split(':'))[0] * hourInMinutes) + Number((startMeetingTime.split(':'))[1]) + Number(lengthMeetingMinutes);

  return (endWorkingMinutes - startWorkingMinutes) >= (meetingMinutes - startWorkingMinutes);

};

checkLengthMeeting ('08:00', '18:5', '16:33', '90');
