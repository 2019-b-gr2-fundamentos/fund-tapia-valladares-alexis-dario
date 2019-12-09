#include <iostream>
#include <conio.h>
#include <cmath>
#include <math.h>
using namespace std;

void pedir2Variables(double *variableUno, double *variableDos);
void pedirVariables(double *variableUno, double *variableDos, double *variableTres, double *variableCuatro, int opcion);
double suma (double numUno, double numDos);
double resta (double numUno, double numDos);
double multiplicacion (double numUno, double numDos);
double division (double numUno, double numDos);
double desplazamientoXParabolico (double Vo, double angulo, double tiempo);
double promedioParteEntera(double numUno, double numDos);
double distanciaRecorrida(double Vo, double tiempo, double aceleracion);
double distanciaDosPuntos(double x1,double x2,double y1,double y2);
double indiceMasaCorporal(double peso, double altura);
double gasesIdeales(double presion, double moles, double r, double temperatura);
void repetirSalir();
void calculadora();

int main() {
    cout << "CALCULADORA" <<endl;
    calculadora();
    return 0;
}

void pedir2Variables(double *variableUno, double *variableDos){
    cout << "Ingrese el 1 Elemento : ";
    cin >> *variableUno;
    cout << "Ingrese el 2 Elemento : ";
    cin >> *variableDos;
}
void pedirVariables(double *variableUno, double *variableDos, double *variableTres, double *variableCuatro, int opcion){
    if(opcion==5){
        cout << "Ingrese la Vo : ";
        cin >> *variableUno;
        cout << "Ingrese el Angulo en Grados : ";
        cin >> *variableDos;
        cout << "Ingrese el Tiempo : ";
        cin >> *variableTres;
    }else if (opcion == 7){
        cout << "Ingrese la Vo : ";
        cin >> *variableUno;
        cout << "Ingrese el Tiempo: ";
        cin >> *variableDos;
        cout << "Ingrese la Aceleracion: ";
        cin >> *variableTres;
    }else if (opcion == 8){
        cout << "Ingrese X1 : ";
        cin >> *variableUno;
        cout << "Ingrese Y1 : ";
        cin >> *variableTres;
        cout << "Ingrese X2 : ";
        cin >> *variableDos;
        cout << "Ingrese Y2 : ";
        cin >> *variableCuatro;
    }else if (opcion == 9){
        cout << "Ingrese el Peso (kg) : ";
        cin >> *variableUno;
        cout << "Ingrese la Altura (m) : ";
        cin >> *variableDos;
    }else{
        cout << "Ingrese la Presion (at): ";
        cin >> *variableUno;
        cout << "Ingrese los Moles : ";
        cin >>*variableDos;
        cout << "Ingrese la Constante de Gases Ideales: ";
        cin >> *variableTres;
        cout << "Ingrese la Temperatura (k): ";
        cin >> *variableCuatro;
    }
}
double suma (double numUno, double numDos){
    return numDos+numUno;
}
double resta (double numUno, double numDos){
    return numUno-numDos;
}
double multiplicacion (double numUno, double numDos){
    return numUno*numDos;
}
double division (double numUno, double numDos){
    return numUno/numDos;
}
double desplazamientoXParabolico (double Vo, double angulo, double tiempo){
    double xMax;
    xMax = (Vo*cos(angulo*0.0174533))/tiempo;
    return xMax;
}
double promedioParteEntera(double numUno, double numDos){
    double promedio,parteEntera;
    promedio = (numUno + numDos) / 2;
    modf(promedio, &parteEntera);
    return parteEntera;
}
double distanciaRecorrida(double Vo, double tiempo, double aceleracion){
    double distancia;
    distancia= (Vo*tiempo)+((0.5)*aceleracion*pow(tiempo,2));
    return distancia;
}
double distanciaDosPuntos(double x1,double x2,double y1,double y2){
    double distancia;
    distancia = sqrt((pow((x2-x1),2))+(pow((y2-y1),2)));
    return distancia;
}
double indiceMasaCorporal(double peso, double altura){
    double imc;
    imc = peso/pow(altura,2);
    return imc;
}
double gasesIdeales(double presion, double moles, double r, double temperatura){
    double volumen;
    volumen = (moles*r*temperatura)/presion;
    return volumen;
}
void repetirSalir(){
    int op;
    cout<<"\nDesea realizar otra operacion\n1) SI\n2) NO";
    cout<<"\nIngrese el numero de la opcion: ";
    cin>>op;
    if(op==1){
        calculadora();
    }else if(op == 2){
        cout<<"\nADIOS! =D\n";
    }else{
        cout<<"\nEsa opcion no existe!\n";
        repetirSalir();
    }
}
void calculadora(){
    int opcion;
    double resultado, variable1, variable2, variable3,variable4;
    cout<<"\n1) Suma\n2) Resta\n3) Multiplicacion\n4) Division\n5) Desplazamiento en X Tiro Parabolico";
    cout<<"\n6) Parte Entera\n7) Distancia Recorrida\n8) Distancia entre Dos Puntos\n9) Indice de Masa Corporal\n10) Volumen Gases Ideales\n";
    cout<<"\nQue operacion desea hacer ?\nIngrese el numero de la opcion: ";
    cin>>opcion;
    if(opcion == 1){//Suma
    	cout<<"\nSuma\n";
        pedir2Variables(&variable1,&variable2);
        resultado=suma(variable1,variable2);
        cout<<"La suma de "<<variable1<<" + "<<variable2<<" = "<<resultado<<endl;
        repetirSalir();
    }else if(opcion == 2){//Resta
        cout<<"\nResta\n";
		pedir2Variables(&variable1,&variable2);
        resultado=resta(variable1,variable2);
        cout<<"La resta de "<<variable1<<" - "<<variable2<<" = "<<resultado<<endl;
        repetirSalir();
    }else if(opcion ==3){//Multiplicacion
        cout<<"\nMultiplicacion\n";
		pedir2Variables(&variable1,&variable2);
        resultado=multiplicacion(variable1,variable2);
        cout<<"La multiplicacion de "<<variable1<<" * "<<variable2<<" = "<<resultado<<endl;
        repetirSalir();
    }else if(opcion ==4){//Division
        cout<<"\nDivision\n";
		pedir2Variables(&variable1,&variable2);
        resultado=division(variable1,variable2);
        cout<<"La division de "<<variable1<<" / "<<variable2<<" = "<<resultado<<endl;
        repetirSalir();
    }else if(opcion ==5){//Desplazamiento en X
        cout<<"\nDesplazamiento en X\n";
		pedirVariables(&variable1,&variable2,&variable3,NULL,opcion);
        resultado=desplazamientoXParabolico(variable1,variable2,variable3);
        cout<<"El Desplazamiento en X en t ("<<variable3<<") = "<<resultado<<endl;
        repetirSalir();
    }else if(opcion ==6){//Promedio Parte Entera
        cout<<"\nPromedio Parte Entera\n";
		pedir2Variables(&variable1,&variable2);
        resultado=promedioParteEntera(variable1,variable2);
        cout<<"La parte entera es : "<<resultado;
        repetirSalir();
    }else if (opcion==7){//Distancia Recorrida
        cout<<"\nDistancia Recorrida\n";
		pedirVariables(&variable1,&variable2,&variable3,NULL,opcion);
        resultado=distanciaRecorrida(variable1,variable2,variable3);
        cout<<"La Distancia Recorrida a t("<<variable2<<") = "<<resultado<<endl;
        repetirSalir();
    }else if (opcion==8){//Distancia 2 Puntos
        cout<<"\nDistancia 2 Puntos\n";
		pedirVariables(&variable1,&variable2,&variable3,&variable4,opcion);
        resultado=distanciaDosPuntos(variable1,variable2,variable3,variable4);
        cout<<"La distancia entre P1("<<variable1<<","<<variable3<<") y P2("<<variable2<<","<<variable4<<") = "<<resultado;
        repetirSalir();
    }else if (opcion==9){//Indice Masa Corporal
        cout<<"\nIndice de Masa Corporal\n";
		pedirVariables(&variable1,&variable2,NULL,NULL,opcion);
        resultado=indiceMasaCorporal(variable1,variable2);
        cout<<"El indice de Masa Corporal ="<<resultado<<endl;
        repetirSalir();
    }else if (opcion==10){//Gases Ideales
        cout<<"\nVolumen Gases Ideales\n";
		pedirVariables(&variable1,&variable2,&variable3,&variable4,opcion);
        resultado=gasesIdeales(variable1,variable2,variable3,variable4);
        cout<<"El Volumen = "<<resultado<<" [litros]"<<endl;
        repetirSalir();
    }
    else{
        cout<<"\nEsa opcion no existe =(\n";
        calculadora();
    }
}
