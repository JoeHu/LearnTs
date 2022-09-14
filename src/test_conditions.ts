
type K4 = Exclude<'a'|'b'|'c', 'a'|'b'>

type IsString<T> = T extends string ? true : false;
type I0 = IsString<number>
type I1 = IsString<"abc">
type I2 = IsString<any>
type I3 = IsString<never>
 