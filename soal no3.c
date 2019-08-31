// Nama : Tunggul Julianto Pasaribu
// Institut Teknologi Del
// Soal No3.
// Referensi https://stackoverflow.com/questions/20744025/prime-generator-algorithm
// Slide PMC  Institut Teknologi Del
#include <stdio.h>
int Prime[20];
int i, j, k = 0;
void PrimeGenerator(){
	int cek, temp = 0;
	for(i = 2; i <= 31; i++){
		cek = 0;
		for(j = 2; j < i; j++){
			if(i%j == 0){
				cek = 1;
				temp = j;
				break;
			}
		}
		if(cek != 1){
			Prime[k] = j;
			k++;
		}
	}
}

int main(){
	PrimeGenerator();

	
	int input;
	scanf("%d", &input);
	for(i = 0; i < input; i++){
		for(j = 0; j <= i; j++){
			printf("%d", Prime[j]);
			if(j != i)	printf(" ");
		}
		printf("\n");
	}
}
