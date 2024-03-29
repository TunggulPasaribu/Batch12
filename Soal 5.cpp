// Nama : Tunggul Julianto Pasaribu
// Institut Teknologi Del
// Medan
// Soal No 5.
// Referensi : https://www.geeksforgeeks.org/sorting-algorithms/

#include <bits/stdc++.h> 
  
using namespace std; 
  

void printInSortedOrder(string arr[], int n) 
{ 
    int index[n]; 
    int i, j, min; 
      
    for (i=0; i<n; i++) 
        index[i] = i; 
      
    for (i=0; i<n-1; i++)     
    { 
        min = i; 
        for (j=i+1; j<n; j++) 
        { 
            if (arr[index[min]].compare(arr[index[j]]) > 0) 
                min = j; 
        } 
          
        if (min != i) 
        { 
            int temp = index[min]; 
            index[min] = index[i]; 
            index[i] = temp; 
        } 
    } 
      
    for (i=0; i<n; i++) 
        cout << arr[index[i]] << " "; 
} 
  
int main() 
{ 
    string arr[] = {"pro","it","gram"}; 
    int n = 3; 
    printInSortedOrder(arr, n); 
    return 0; 
} 
