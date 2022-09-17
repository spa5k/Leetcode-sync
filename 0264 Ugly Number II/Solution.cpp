class Solution {
public:
    int nthUglyNumber(int n) {
        int dp[n+1]; 
        memset( dp , 0 ,sizeof(dp)); 
        dp[1]=1 ;
        int two = 1 , three=1 , five= 1 ; 
        for (int i = 2 ; i <=n ; i++){
            int a = 2*dp[two];
            int b = 3*dp[three]; 
            int c =5*dp[five];
            int min__ = min(a,min(b,c)); 
            dp[i]= min__; 
            if(a== min__) two++; 
            if(b== min__) three++; 
            if(c==min__) five++;  // keeping all as if instead of else if because there can be case when we see a==b or b==c or a==c so to handle this condition we increment all the  pointer matching the value  
        }
        return dp[n];
    }
};