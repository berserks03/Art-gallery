export type PrincipalMaker = {
    name: string;
    unFixedName: string;
    placeOfBirth: string;
    dateOfBirth: string;
    dateOfBirthPrecision?: string;
    dateOfDeath: string;
    dateOfDeathPrecision?: string;
    placeOfDeath: string;
    occupation: string[];
    roles: string[];
    nationality: string;
    biography?: string;
    productionPlaces: string[];
    qualification?: string;
    labelDesc: string;
};
