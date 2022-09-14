
type fn = () => number
type fnReturnType = ReturnType<fn> // number

//不能将类型“string”分配给类型“number”。
// let test_fnReturnType: fnReturnType = "1";
let test_fnReturnType: fnReturnType = 4;


// promise 响应类型
type PromiseResType<T> = T extends Promise<infer R> ? R : T

// 验证
async function strPromise() {
	return 'string promise'
}

interface Person {
	name: string;
	age: number;
}
async function personPromise() {
	return {
		name: 'p',
		age: 12
	} as Person
}

type StrPromise = ReturnType<typeof strPromise> // Promise<string>
// 反解
type StrPromiseRes = PromiseResType<StrPromise> // str

type PersonPromise = ReturnType<typeof personPromise> // Promise<Person>
// 反解
type PersonPromiseRes = PromiseResType<PersonPromise> // Person



type Fn<A extends any[]> = (...args: A) => any
type FnArgs<T> = T extends Fn<infer A> ? A : any

function strFn(name: string) {

}

type StrFn = FnArgs<typeof strFn> // [string]

// 不能将类型“string”分配给类型“[name: string]”
// let test_StrFn: StrFn = "a";
let test_StrFn: StrFn = ["xxx"];

// type ElementOf<T> = T extends Array<infer E> ? E : never

// type TTuple = [string, number, boolean];

// type ToUnion = ElementOf<TTuple>; // string | number
// // console.log(typeof(ToUnion));

// let test_union: ToUnion = true;

// 获取参数类型
// type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never;

// // 获取实例类型
// type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

// class TestClass {

// 	constructor(
// 		public name: string,
// 		public string: number
// 	) { }
// }

// type Params = ConstructorParameters<typeof TestClass>;  // [string, numbder]

// type Instance = InstanceType<typeof TestClass>;         // TestClass

// 定义
// function useReducer<R extends Reducer<any, any>, I>(
// 	reducer: R,
// 	// ReducerState 推断类型
// 	initializerArg: I & ReducerState<R>,
// 	initializer: (arg: I & ReducerState<R>) => ReducerState<R>
// ): [ReducerState<R>, Dispatch<ReducerAction<R>>];

// // infer推断
// type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any>
// 	? S
// 	: never;
// // Reducer类型
// type Reducer<S, A> = (prevState: S, action: A) => S;


// // 使用 reducer
// const reducer = (x: number) => x + 1;
// const [state, dispatch] = useReducer(reducer, '');
// // Argument of type "" is not assignable to parameter of type 'number'.


// export interface Ref<T = any> {
// 	[isRefSymbol]: true
// 	value: T
// }

// export function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>

// export type UnwrapRef<T> = {
// 	cRef: T extends ComputedRef<infer V> ? UnwrapRef<V> : T
// 	ref: T extends Ref<infer V> ? UnwrapRef<V> : T
// 	array: T
// 	object: { [K in keyof T]: UnwrapRef<T[K]> }
// }[T extends ComputedRef<any>
// 	? 'cRef'
// 	: T extends Array<any>
// 	? 'array'
// 	: T extends Ref | Function | CollectionTypes | BaseTypes
// 	? 'ref' // bail out on types that shouldn't be unwrapped
// 	: T extends object ? 'object' : 'ref']


// // 使用
// const count = ref({
// 	foo: ref('1'),
// 	bar: ref(2)
// })

// // 推断出
// const count: Ref<{
// 	foo: string;
// 	bar: number;
// }>

// const count = ref(2) // Ref<number>

// const count = ref(ref(2)) // Ref<number>


