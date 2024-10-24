type C<T,U extends T> = T extends U ? T:never
type C2<T,U extends T> = U extends T ? T:never


type D = C<'A'|'B','A'>

type D2 = C2<'A'|'B','A'>