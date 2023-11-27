/**
 * Type for creating a readonly lookup object.
 *
 * @example
 * ```ts
 * export type Thing = 'foo' | 'bar' | 'baz';
 *
 * export const formattedThings: Lookup<Thing, string> = {
 *     foo: 'Foo',
 *     bar: 'Bar',
 *     baz: 'Baz',
 * };
 * ```
 */
export type Lookup<TKey extends string | number | symbol, TValue> = Readonly<
  Record<TKey, TValue>
>;

/**
 * Type for creating a type guard.
 *
 * const isNumber: TypeValidator<number> = (value): value is number =>
 *     typeof value === 'number' && !Number.isNaN(value);
 */
export type TypeValidator<T> = (obj: unknown) => obj is T;

/**
 * The Modify utility type accepts the type `Type` and overrides it with
 * the type `Replace`, allowing you to specify more specific types, for
 * example, replacing `any` or `unknown` with `number` or `string`.
 *
 * Example:
 * ```ts
 *  type Generic = { x: any };
 *  type Specific = Modify<Generic, { x: number }>;
 *
 *  const processDataGeneric = ({ x }: Generic) => x.toFixed(2);
 *  const processDataSpecific = ({ x }: Specific) => x.toFixed(2);
 *
 *  processDataGeneric({ x: 1.2345 }); // OK
 *  processDataGeneric({ x: 'makes no sense' }); // OK??
 *  processDataSpecific({ x: 1.2345 }); // OK
 *
 *  processDataSpecific({ x: 'makes no sense' });
 *  //                    ^
 *  //                    ERROR: Type 'string' not assignable to 'number'.
 * ```
 */
export type Modify<Type, Replace> = Omit<Type, keyof Replace> & Replace;
