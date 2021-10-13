#include<bits/stdc++.h>
using namespace std;

bool customSort (const  pair<int,int> &a,const  pair <int,int> &b) // Utility function with which we will sort the list of activites in the descending order of finishing time
{
    return a.second<b.second;
}

void activityProblem(int start[],int finish[],int n) // Definition of the solution function 
{
    vector<pair<int,int>> activities(n),performing;
    for(int i=0;i<n;i++)
        activities[i] = {start[i],finish[i]};
    sort(activities.begin(),activities.end(),customSort);   
    for(auto &i:activities)
        cout<<'('<<i.first<<','<<i.second<<") ";
}

int main()
{
    int start[] = {1,3,2,3};
    int finish [] = {2,5,1,1};
    int n = sizeof(start)/sizeof(int);
    activityProblem(start,finish,n);
}