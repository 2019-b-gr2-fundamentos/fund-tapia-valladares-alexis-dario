#include <iostream>

using namespace std;

//Variables primitivas

//bool -> Por lo general utiliza 1 byte de memoria, valores: true o false
//char -> Utiliza generalmente 1 byte de memoria, permite almacenar un carácter
//unsigned short int -> Utiliza generalmente 2 bytes de memoria, valores: de 0 a 65 535
//short int -> Utiliza generalmente 2 bytes de memoria, valores: de -32768 a 32767
//unsigned long int -> Utiliza generalmente 4 bytes de memoria, valores: de 0 a 4 294 967 295
//long int -> Utiliza generalmente 4 bytes de memoria, valores: de -2 147 483 648 a 2 147 483 647
//int -> Utiliza generalmente 2 bytes de memoria, valores: de -32 768 a 32 767
//unsigned int -> Utiliza generalmente 2 bytes de memoria, valores: de 0 a 4 294 967 295
///double -> Utiliza generalmente 8 bytes de memoria, valores: de 2.2e-308 a 3.4e-38
//float -> Utiliza generalmente 4 bytes de memoria, valores: de 1.2e-308 a 3.4e-38

int main() {

    bool v1 = true;
    char v2 = 'a';
    unsigned short int v3 = 25000;
    short int v4 = -2500;
    unsigned long int v5 = 1000000;
    long int v6 = -1789512;
    int v7 = -14568;
    unsigned int v8 = 2949672;
    double v9 = 12346557985;
    float v10 = 123.5684;

    return 0;

}