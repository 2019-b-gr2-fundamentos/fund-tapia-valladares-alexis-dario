#include <iostream>
#include <conio.h>
#include <cstdlib>
#include <cstdio>
#include <cstring>
using namespace std;

void digimon();
void aniadir();
void actualizar();
void borrar();
void menu();
void listar();
void terminar();

int numDigimon;
string *arreglo;

int main() {
    cout << "DIGIMON" << endl;
    digimon();
    return 0;
}
void aniadir() {
    system("cls");
    cout<<"\n**Aniadir**\nLista de Digimones existentes:\n";
    listar();
    int extra,opcion,indiceAntiguo;
    string *antiguoArreglo;
    cout<<"\nCuantos nombres mas desea ingresar ? : ";
    cin>>extra;
    antiguoArreglo=arreglo;
    indiceAntiguo=numDigimon;
    numDigimon=extra+numDigimon;
    arreglo=new string[numDigimon];
    for(int i=0;i<indiceAntiguo;i++){
        arreglo[i]=antiguoArreglo[i];
    }
    for(int i=indiceAntiguo;i<numDigimon;i++){
        cout<<"Ingrese el nuevo nombre del Digimon: ";
        cin>>arreglo[i];
    }
    cout<<"\nLa lita de Digimones se ha actualizado\n";
    listar();
	do{
		cout<<"\nDesea ingresar mas nombres?\n1)Si\t2)No\nIngrese el numero de la opcion : ";
    	cin>>opcion;
    	if(opcion==1){
            aniadir();
        }else if(opcion==2){
            terminar();
        }
	}while(opcion == 1 && opcion ==2);   
}
void actualizar(){
    //system("cls");
    int act,opcion;
    cout<<"\n**Actualizar**\nLista de Digimones existentes:\n";
    listar();
    cout<<"\nIngrese el # del Digimon que desea actualizar: ";
    cin>>act;
    act=act-1;
    cout<<"\n\tIngrese el nuevo nombre: ";
    cin>>arreglo[act];
    cout<<"\nLa lita de Digimones se ha actualizado\n";
    listar();
    do{
		cout<<"\nDesea actualizar mas nombres?\n1)Si\t2)No\nIngrese el numero de la opcion : ";
    	cin>>opcion;
    	if(opcion==1){
            actualizar();
        }else if(opcion==2){
            terminar();
        }
	}while(opcion == 1 && opcion ==2);   
}
void borrar(){
    system("cls");
	int elm,opcion;
    //string *antiguoArreglo;
    system("cls");
    cout<<"\n**Eliminar**\nLista de Digimones existentes:\n";
    listar();
    //antiguoArreglo=arreglo;
    cout<<"\nIngrese el # del Digimon que desea eliminar: ";
    cin>>elm;
    elm=elm-1;
    //antiguoArreglo = new string[numDigimon-1];
    for(int i=0;i<numDigimon;i++) {
        if(i==elm){
            do{
            	//antiguoArreglo[i]=arreglo[i+1];
				arreglo[i]=arreglo[i+1];            	
            	i++;
			}while(i<numDigimon-1);
            break;
        }
    }
    //arreglo=antiguoArreglo;
    numDigimon=numDigimon-1;
    cout<<"\nLa lita de Digimones se ha actualizado\n";
    listar();
    cout<<"\nDesea eliminar mas nombres?\n1)Si\t2)No\nIngrese el numero de la opcion : ";
    cin>>opcion;
    while (opcion!=1||opcion!=2){
        if(opcion==1){
            borrar();
        }else if(opcion==2){
            terminar();
        }
        cout<<"\nEsa opcion no existe =(\n";
        cout<<"\nDesea eliminar mas nombres?\n1)Si\t2)No\nIngrese el numero de la opcion : ";
        cin>>opcion;
    }

}
void menu(){
    int opcion;
    cout<<"\nQue desea hacer?\n\t1) Aniadir\n\t2) Actualizar\n\t3) Eliminar\n\t4) Ver Lista\nIngrese el numero de la opcion : ";
    cin>>opcion;
    if(opcion==1){
        aniadir();
    }else if(opcion==2){
        actualizar();
    }else if(opcion==3){
        borrar();
    }else if(opcion==4){
        cout<<"\n**Lista de Digimones**\n";
        listar();
        terminar();
    }else{
        cout<<"\nEsa opcion no existe =(\n\n";
        menu();
    }
}
void digimon(){
    cout<<"Cuantos Digimones desea ingresar? : ";
    cin>>numDigimon;
    arreglo = new string[numDigimon];
    for(int i=0;i<numDigimon;i++){
        cout<<"Ingrese el nombre del Digimon: ";
        cin>>arreglo[i];
    }
    menu();
}
void listar(){
    for(int i=0;i<numDigimon;i++){
        cout<<"\tDigimon #"<<(i+1)<<" -> "<<arreglo[i]<<endl;
    }
}
void terminar(){
    int opcion;
    cout<<"\nQue desea hacer?\n1) Volver al Menu\t2) Finalizar\nIngrese la opcion : ";
    cin>>opcion;
    if(opcion==1){
        menu();
    }else if(opcion==2){
        cout<<"\nAdios! =D\n";
    }else{
        cout<<"\nEsa opcion no existe =(\n";
        terminar();
    }
}
