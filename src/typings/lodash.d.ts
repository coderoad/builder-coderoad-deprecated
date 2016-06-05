//_.merge
interface LoDashStatic {
  /**
   * Recursively merges own and inherited enumerable properties of source
   * objects into the destination object, skipping source properties that resolve
   * to `undefined`. Array and plain object properties are merged recursively.
   * Other objects and value types are overridden by assignment. Source objects
   * are applied from left to right. Subsequent sources overwrite property
   * assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var users = {
   *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
   * };
   *
   * var ages = {
   *   'data': [{ 'age': 36 }, { 'age': 40 }]
   * };
   *
   * _.merge(users, ages);
   * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
   */
  merge<TObject, TSource>(
    object: TObject,
    source: TSource
  ): TObject & TSource;

  /**
   * @see _.merge
   */
  merge<TObject, TSource1, TSource2>(
    object: TObject,
    source1: TSource1,
    source2: TSource2
  ): TObject & TSource1 & TSource2;

  /**
   * @see _.merge
   */
  merge<TObject, TSource1, TSource2, TSource3>(
    object: TObject,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3
  ): TObject & TSource1 & TSource2 & TSource3;

  /**
   * @see _.merge
   */
  merge<TObject, TSource1, TSource2, TSource3, TSource4>(
    object: TObject,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    source4: TSource4
  ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

  /**
   * @see _.merge
   */
  merge<TResult>(
    object: any,
    ...otherArgs: any[]
  ): TResult;
}

interface LoDashImplicitObjectWrapper<T> {
  /**
   * @see _.merge
   */
  merge<TSource>(
    source: TSource
  ): LoDashImplicitObjectWrapper<T & TSource>;

  /**
   * @see _.merge
   */
  merge<TSource1, TSource2>(
    source1: TSource1,
    source2: TSource2
  ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>;

  /**
   * @see _.merge
   */
  merge<TSource1, TSource2, TSource3>(
    source1: TSource1,
    source2: TSource2,
    source3: TSource3
  ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>;

  /**
   * @see _.merge
   */
  merge<TSource1, TSource2, TSource3, TSource4>(
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    source4: TSource4
  ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>;

  /**
   * @see _.merge
   */
  merge<TResult>(
    ...otherArgs: any[]
  ): LoDashImplicitObjectWrapper<TResult>;
}

interface LoDashExplicitObjectWrapper<T> {
  /**
   * @see _.merge
   */
  merge<TSource>(
    source: TSource
  ): LoDashExplicitObjectWrapper<T & TSource>;

  /**
   * @see _.merge
   */
  merge<TSource1, TSource2>(
    source1: TSource1,
    source2: TSource2
  ): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>;

  /**
   * @see _.merge
   */
  merge<TSource1, TSource2, TSource3>(
    source1: TSource1,
    source2: TSource2,
    source3: TSource3
  ): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>;

  /**
   * @see _.merge
   */
  merge<TSource1, TSource2, TSource3, TSource4>(
  ): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>;

  /**
   * @see _.merge
   */
  merge<TResult>(
    ...otherArgs: any[]
  ): LoDashExplicitObjectWrapper<TResult>;
}

declare module 'lodash.merge' {
  const merge: typeof LoDashStatic.merge;
  export = merge;
}
