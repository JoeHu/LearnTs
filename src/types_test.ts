
//keyof
// 映射类型

// 选择类型 条件类型

// 删除属性中的只读属性 
type CreateMutable<Type> = { -readonly [Property in keyof Type]: Type[Property]; }; 
type LockedAccount = { readonly id: string; readonly name: string; }; 
type UnlockedAccount = CreateMutable<LockedAccount>; 
let a: UnlockedAccount = {id : "", name : "" }
console.log(a);


// type UnlockedAccount = { //    id: string; //    name: string; // }
// 删除属性中的可选属性 
// type Concrete<Type> = { [Property in keyof Type]-?: Type[Property]; }; 
type Concrete<Type> = { [Property in keyof Type]: Type[Property]; }; 

type MaybeUser = {   id: string;   name?: string;   age?: number; }; 
type User = Concrete<MaybeUser>; 
// type User = { //    id: string; //    name: string; //    age: number; // }

let user: User = {id: "string" }

// type MappedTypeWithNewProperties<Type> = { [Properties in keyof Type as NewKeyType]: Type[Properties] }

type TypeName<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends Function ? "function" : "object";

type Getters<Type> = { [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property] }; 
type Setters<Type> = { [Property in keyof Type as `set${Capitalize<string & Property>}`]: (value: TypeName<string>)=> void };
interface Person { name: string; age: number; location: string; } 
type LazyPerson = Getters<Person>; 
type lazyPersonSetter = Setters<Person>
// type LazyPerson = { //    getName: () => string; //    getAge: () => number; //    getLocation: () => string; // }

let astr: string = '';
console.log(typeof(astr));

// Remove the 'kind' property 
type RemoveKindField<Type> = { [Property in keyof Type as Exclude<Property, "kind">]: Type[Property] }; 
interface Circle {     kind: "circle";     radius: number; } 
type KindlessCircle = RemoveKindField<Circle>; 
// type KindlessCircle = { //    radius: number; // }
// 你还可以遍历任何联合类型，不仅仅是 string | number | symbol 这种联合类型，可以是任何类型的联合：
type EventConfig<Events extends { kind: string }> = { [E in Events as E["kind"]]: (event: E) => void; } 
type SquareEvent = { kind: "square", x: number, y: number }; 
type CircleEvent = { kind: "circle", radius: number }; 
type Config = EventConfig<SquareEvent | CircleEvent> 
// type Config = { //    square: (event: SquareEvent) => void; //    circle: (event: CircleEvent) => void; // }

type ExtractPII<Type> = { [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false; }; 
type DBFields = { id: { format: "incrementing" }; name: { type: string; pii: true }; }; 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>; 

// type ObjectsNeedingGDPRDeletion = { //    id: false; //    name: true; // }
