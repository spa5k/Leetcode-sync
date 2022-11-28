class Solution
{
public:
  double angleClock(int hour, int minutes)
  {
    double oneHour = 30;
    double oneMinute = 6;

    double angelForHour = (hour * oneHour) + (double)minutes / 2;
    double angelForMinute = minutes * oneMinute;
    double difference = abs(angelForHour - angelForMinute);
    return min(difference, 360 - difference);
  }
};