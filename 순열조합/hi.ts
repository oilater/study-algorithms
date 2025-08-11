type A = 'A';
type B = 'B';
type C = 'C';
type AB = A | B;
type AB12 = A | B | 12;

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';

declare let twelve: AB12;

interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
    name: 'ksh',
    birth: new Date(''),
    death: new Date(),
}

type K = keyof (Person | Lifespan); // never

// keyof (A & B) = (keyof A) | (keyof B)
// keyof (A | B) = (keyof A) | (keyof B)

interface PersonSpanGeneral extends Person {
    birth: Date;
    death?: Date;
}

interface Vector1D {
    x: number;
}

interface Vector2D extends Vector1D {
    y: number;
}

interface Vector3D extends Vector2D {
    z: number;
}

// function getKey<K extends string>(val: any, key: K) {
//     // ...
// }

function getKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// 스벅 주문
// 커피 타입

// Recipe: { coffee: Coffee , sandwitch: Sandwitch }

// learnRecipe<T, K extends keyof T>(CoffeeRecipe, 'americano')

// CoffeeRecipe, SandwitchRecipe 
/**
 * interface CoffeeRecipe {
 *   [key: Coffee]: string
 * }
 * 
 * const CoffeeRecipe = {
 *   'americano': '물을 붓는다'
 * }
 */