class Solution
{
public:
  int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2)
  {
    int area1;
    int area2;
    area1 = calculateArea(ax1, ay1, ax2, ay2);
    area2 = calculateArea(bx1, by1, bx2, by2);
    int x_overlap = max(min(ax2, bx2) - max(ax1, bx1), 0);
    int y_overlap = max(min(ay2, by2) - max(ay1, by1), 0);
    int area_overlap = x_overlap * y_overlap;
    return area1 + area2 - area_overlap;
  }
  int calculateArea(int ax1, int ay1, int ax2, int ay2)
  {
    int height = ay2 - ay1;
    int width = ax2 - ax1;
    return height * width;
  }
};