var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
};

var __locale_struct = exports.__locale_struct = Struct({
  __locales: ArrayType(voidPtr, 13),
  __ctype_b: ref.refType(ref.types.ushort),
  __ctype_tolower: ref.refType(ref.types.int32),
  __ctype_toupper: ref.refType(ref.types.int32),
  __names: ArrayType(ref.types.CString, 13),
});
var __locale_structPtr = exports.__locale_structPtr = ref.refType(__locale_struct);
var ethash_light_t = exports.ethash_light_t = voidPtr;
var ethash_light_tPtr = exports.ethash_light_tPtr = ref.refType(ethash_light_t);
var ethash_h256 = exports.ethash_h256 = Struct({
  b: ArrayType(ref.types.uchar, 32),
});
var ethash_h256Ptr = exports.ethash_h256Ptr = ref.refType(ethash_h256);
var ethash_return_value = exports.ethash_return_value = Struct({
  result: ethash_h256,
  mix_hash: ethash_h256,
  success: ref.types.byte,
});
var ethash_return_valuePtr = exports.ethash_return_valuePtr = ref.refType(ethash_return_value);
var ethash_full_t = exports.ethash_full_t = voidPtr;
var ethash_full_tPtr = exports.ethash_full_tPtr = ref.refType(ethash_full_t);
var ethash_callback_t = exports.ethash_callback_t = FFI.Function(ref.types.int32, [
  ref.types.uint32,
]);
var ethash_callback_tPtr = exports.ethash_callback_tPtr = ref.refType(ethash_callback_t);

exports.ethash = new FFI.Library('./libethash.so', {
  memcpy: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memmove: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memccpy: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.int32,
    ref.types.ulong,
  ]],
  memset: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.ulong,
  ]],
  memcmp: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  memchr: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.ulong,
  ]],
  strcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strcat: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncat: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strcmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strcoll: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strxfrm: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strcoll_l: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    __locale_structPtr,
  ]],
  strxfrm_l: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
    __locale_structPtr,
  ]],
  strdup: [ref.types.CString, [
    ref.types.CString,
  ]],
  strndup: [ref.types.CString, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  strchr: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strrchr: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strcspn: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strspn: [ref.types.ulong, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strpbrk: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strstr: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strtok: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  __strtok_r: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  strtok_r: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  strlen: [ref.types.ulong, [
    ref.types.CString,
  ]],
  strnlen: [ref.types.ulong, [
    ref.types.CString,
    ref.types.ulong,
  ]],
  strerror: [ref.types.CString, [
    ref.types.int32,
  ]],
  strerror_r: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strerror_l: [ref.types.CString, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  __bzero: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
  ]],
  bcopy: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  bzero: [ref.types.void, [
    voidPtr,
    ref.types.ulong,
  ]],
  bcmp: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.ulong,
  ]],
  index: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  rindex: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  ffs: [ref.types.int32, [
    ref.types.int32,
  ]],
  strcasecmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncasecmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  strsep: [ref.types.CString, [
    voidPtr,
    ref.types.CString,
  ]],
  strsignal: [ref.types.CString, [
    ref.types.int32,
  ]],
  __stpcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  stpcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  __stpncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  stpncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.ulong,
  ]],
  ethash_light_new: [ethash_light_t, [
    ref.types.ulong,
  ]],
  ethash_light_delete: [ref.types.void, [
    ethash_light_t,
  ]],
  ethash_light_compute: [ethash_return_value, [
    ethash_light_t,
    ethash_h256,
    ref.types.ulong,
  ]],
  ethash_full_new: [ethash_full_t, [
    ethash_light_t,
    ethash_callback_t,
  ]],
  ethash_full_delete: [ref.types.void, [
    ethash_full_t,
  ]],
  ethash_full_compute: [ethash_return_value, [
    ethash_full_t,
    ethash_h256,
    ref.types.ulong,
  ]],
  ethash_full_dag: [voidPtr, [
    ethash_full_t,
  ]],
  ethash_full_dag_size: [ref.types.ulong, [
    ethash_full_t,
  ]],
  ethash_get_seedhash: [ethash_h256, [
    ref.types.ulong,
  ]],
});

