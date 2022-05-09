"use strict";

class Matrice
{
    // CHAMPS -----------

    results = []; // init nécessaire

    students = 3;
    domainNumber = 2;
    notation = 20;

    max;
    min;
    average1;
    sum = 0;

    // CONSTRUCTOR ------

    constructor()
    {
        // Renseigner le tableau
        this.SetArray(this.notation);
        console.log('results = ', this.results);
        console.table(this.results);

        // Récupérer le max
        this.SetMax();
        console.log(`Max = ${this.max}`);

        // Le min
        this.SetMin();
        console.log(`Min = ${this.min}`);

        // Obtenir la moyenne
        this.SetAverage();
        console.log(`Moyenne = ${this.average1}`);
    }

    // METHODES ---------

    SetArray(notation)
    {
        for (let i = 0; i < this.students; i++) 
        {
            this.results[i] = []; // init nécessaire

            for (let j = 0; j < this.domainNumber; j++) {
                this.results[i][j] = Math.round(Math.random(0, 1) * notation);
            }
        }
    }

    SetMin()
    {
        this.min = this.results[0][0];
        for (let i = 0; i < this.students.length; i++) 
        {
            for (let j = 0; j < this.domainNumber.length; j++) 
            {
                if(this.results[i][j] < this.min) this.min = this.results[i][j];
            }
        }
    }

    SetMax() 
    {
        this.max = this.results[0][0];
        for (let i = 0; i < this.students; i++) 
        {
            for (let j = 0; j < this.domainNumber; j++) 
            {
                if (this.results[i][j] > this.max) this.max = this.results[i][j];
            }
        }
    }

    SetAverage()
    {
        for (let i = 0; i < this.students; i++) 
        {
            this.sum += this.results[i][0];
        }

        this.average1 = this.sum / this.students;
    }
}

