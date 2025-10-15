const HOUR_IN_MINUTES = 60;

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

const moveTimeToMinutes = (time) => {
  const timeArray = time.split(':').map(Number);
  return timeArray[0] * HOUR_IN_MINUTES + timeArray[1];
};

const checkLengthMeeting = (startWorkingTime, endWorkingTime, startMeetingTime, lengthMeetingMinutes) => {
  const meetingStartMinutes = moveTimeToMinutes(startMeetingTime);
  const meetingEndMinutes = meetingStartMinutes + Number(lengthMeetingMinutes);
  const startWorkingMinutes = moveTimeToMinutes(startWorkingTime);
  const endWorkingMinutes = moveTimeToMinutes(endWorkingTime);

  return startWorkingMinutes <= meetingStartMinutes && meetingEndMinutes <= endWorkingMinutes;
};

checkLengthMeeting ('06:31', '18:50', '17:33', '50');
