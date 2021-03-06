package gw.spec.core.expressions.arithmetic.subtraction
uses java.lang.Byte
uses java.lang.Character
uses java.lang.Integer
uses java.lang.Short
uses java.lang.Long
uses java.lang.Float
uses java.lang.Double
uses java.math.BigInteger
uses java.math.BigDecimal
uses gw.spec.core.expressions.arithmetic.ArithmeticTestBase

class Subtraction_BigIntegerTest extends ArithmeticTestBase {

  function testBigIntegerPByteSubtraction() {
    assertEquals(big_int("0"), big_int("0") - p_byte(0))
    assertEquals(big_int("-23"), big_int("0") - p_byte(23))
    assertEquals(big_int("32"), big_int("0") - p_byte(-32))
    assertEquals(big_int("-127"), big_int("0") - p_byte(Byte.MAX_VALUE))
    assertEquals(big_int("128"), big_int("0") - p_byte(Byte.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - p_byte(0))
    assertEquals(big_int("0"), big_int("23") - p_byte(23))
    assertEquals(big_int("55"), big_int("23") - p_byte(-32))
    assertEquals(big_int("-104"), big_int("23") - p_byte(Byte.MAX_VALUE))
    assertEquals(big_int("151"), big_int("23") - p_byte(Byte.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - p_byte(0))
    assertEquals(big_int("-55"), big_int("-32") - p_byte(23))
    assertEquals(big_int("0"), big_int("-32") - p_byte(-32))
    assertEquals(big_int("-159"), big_int("-32") - p_byte(Byte.MAX_VALUE))
    assertEquals(big_int("96"), big_int("-32") - p_byte(Byte.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - p_byte(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - p_byte(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - p_byte(-32))
    assertEquals(big_int("123456789012345678901234567763"), big_int("123456789012345678901234567890") - p_byte(Byte.MAX_VALUE))
    assertEquals(big_int("123456789012345678901234568018"), big_int("123456789012345678901234567890") - p_byte(Byte.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_byte(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - p_byte(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - p_byte(-32))
    assertEquals(big_int("-123456789012345678901234568017"), big_int("-123456789012345678901234567890") - p_byte(Byte.MAX_VALUE))
    assertEquals(big_int("-123456789012345678901234567762"), big_int("-123456789012345678901234567890") - p_byte(Byte.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - p_byte(0)))
  }

  function testBigIntegerByteSubtraction() {
    assertEquals(big_int("0"), big_int("0") - b_byte(0))
    assertEquals(big_int("-23"), big_int("0") - b_byte(23))
    assertEquals(big_int("32"), big_int("0") - b_byte(-32))
    assertEquals(big_int("-127"), big_int("0") - b_byte(Byte.MAX_VALUE))
    assertEquals(big_int("128"), big_int("0") - b_byte(Byte.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - b_byte(0))
    assertEquals(big_int("0"), big_int("23") - b_byte(23))
    assertEquals(big_int("55"), big_int("23") - b_byte(-32))
    assertEquals(big_int("-104"), big_int("23") - b_byte(Byte.MAX_VALUE))
    assertEquals(big_int("151"), big_int("23") - b_byte(Byte.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - b_byte(0))
    assertEquals(big_int("-55"), big_int("-32") - b_byte(23))
    assertEquals(big_int("0"), big_int("-32") - b_byte(-32))
    assertEquals(big_int("-159"), big_int("-32") - b_byte(Byte.MAX_VALUE))
    assertEquals(big_int("96"), big_int("-32") - b_byte(Byte.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - b_byte(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - b_byte(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - b_byte(-32))
    assertEquals(big_int("123456789012345678901234567763"), big_int("123456789012345678901234567890") - b_byte(Byte.MAX_VALUE))
    assertEquals(big_int("123456789012345678901234568018"), big_int("123456789012345678901234567890") - b_byte(Byte.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_byte(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - b_byte(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - b_byte(-32))
    assertEquals(big_int("-123456789012345678901234568017"), big_int("-123456789012345678901234567890") - b_byte(Byte.MAX_VALUE))
    assertEquals(big_int("-123456789012345678901234567762"), big_int("-123456789012345678901234567890") - b_byte(Byte.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - b_byte(0)))
  }

  function testBigIntegerPShortSubtraction() {
    assertEquals(big_int("0"), big_int("0") - p_short(0))
    assertEquals(big_int("-23"), big_int("0") - p_short(23))
    assertEquals(big_int("32"), big_int("0") - p_short(-32))
    assertEquals(big_int("-32767"), big_int("0") - p_short(Short.MAX_VALUE))
    assertEquals(big_int("32768"), big_int("0") - p_short(Short.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - p_short(0))
    assertEquals(big_int("0"), big_int("23") - p_short(23))
    assertEquals(big_int("55"), big_int("23") - p_short(-32))
    assertEquals(big_int("-32744"), big_int("23") - p_short(Short.MAX_VALUE))
    assertEquals(big_int("32791"), big_int("23") - p_short(Short.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - p_short(0))
    assertEquals(big_int("-55"), big_int("-32") - p_short(23))
    assertEquals(big_int("0"), big_int("-32") - p_short(-32))
    assertEquals(big_int("-32799"), big_int("-32") - p_short(Short.MAX_VALUE))
    assertEquals(big_int("32736"), big_int("-32") - p_short(Short.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - p_short(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - p_short(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - p_short(-32))
    assertEquals(big_int("123456789012345678901234535123"), big_int("123456789012345678901234567890") - p_short(Short.MAX_VALUE))
    assertEquals(big_int("123456789012345678901234600658"), big_int("123456789012345678901234567890") - p_short(Short.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_short(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - p_short(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - p_short(-32))
    assertEquals(big_int("-123456789012345678901234600657"), big_int("-123456789012345678901234567890") - p_short(Short.MAX_VALUE))
    assertEquals(big_int("-123456789012345678901234535122"), big_int("-123456789012345678901234567890") - p_short(Short.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - p_short(0)))
  }

  function testBigIntegerShortSubtraction() {
    assertEquals(big_int("0"), big_int("0") - b_short(0))
    assertEquals(big_int("-23"), big_int("0") - b_short(23))
    assertEquals(big_int("32"), big_int("0") - b_short(-32))
    assertEquals(big_int("-32767"), big_int("0") - b_short(Short.MAX_VALUE))
    assertEquals(big_int("32768"), big_int("0") - b_short(Short.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - b_short(0))
    assertEquals(big_int("0"), big_int("23") - b_short(23))
    assertEquals(big_int("55"), big_int("23") - b_short(-32))
    assertEquals(big_int("-32744"), big_int("23") - b_short(Short.MAX_VALUE))
    assertEquals(big_int("32791"), big_int("23") - b_short(Short.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - b_short(0))
    assertEquals(big_int("-55"), big_int("-32") - b_short(23))
    assertEquals(big_int("0"), big_int("-32") - b_short(-32))
    assertEquals(big_int("-32799"), big_int("-32") - b_short(Short.MAX_VALUE))
    assertEquals(big_int("32736"), big_int("-32") - b_short(Short.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - b_short(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - b_short(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - b_short(-32))
    assertEquals(big_int("123456789012345678901234535123"), big_int("123456789012345678901234567890") - b_short(Short.MAX_VALUE))
    assertEquals(big_int("123456789012345678901234600658"), big_int("123456789012345678901234567890") - b_short(Short.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_short(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - b_short(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - b_short(-32))
    assertEquals(big_int("-123456789012345678901234600657"), big_int("-123456789012345678901234567890") - b_short(Short.MAX_VALUE))
    assertEquals(big_int("-123456789012345678901234535122"), big_int("-123456789012345678901234567890") - b_short(Short.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - b_short(0)))
  }

  function testBigIntegerPCharSubtraction() {
    assertEquals(big_int("0"), big_int("0") - p_char(0))
    assertEquals(big_int("-23"), big_int("0") - p_char(23))
    assertEquals(big_int("-65535"), big_int("0") - p_char(Character.MAX_VALUE))

    assertEquals(big_int("23"), big_int("23") - p_char(0))
    assertEquals(big_int("0"), big_int("23") - p_char(23))
    assertEquals(big_int("-65512"), big_int("23") - p_char(Character.MAX_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - p_char(0))
    assertEquals(big_int("-55"), big_int("-32") - p_char(23))
    assertEquals(big_int("-65567"), big_int("-32") - p_char(Character.MAX_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - p_char(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - p_char(23))
    assertEquals(big_int("123456789012345678901234502355"), big_int("123456789012345678901234567890") - p_char(Character.MAX_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_char(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - p_char(23))
    assertEquals(big_int("-123456789012345678901234633425"), big_int("-123456789012345678901234567890") - p_char(Character.MAX_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - p_char(0)))
  }

  function testBigIntegerCharacterSubtraction() {
    assertEquals(big_int("0"), big_int("0") - b_char(0))
    assertEquals(big_int("-23"), big_int("0") - b_char(23))
    assertEquals(big_int("-65535"), big_int("0") - b_char(Character.MAX_VALUE))

    assertEquals(big_int("23"), big_int("23") - b_char(0))
    assertEquals(big_int("0"), big_int("23") - b_char(23))
    assertEquals(big_int("-65512"), big_int("23") - b_char(Character.MAX_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - b_char(0))
    assertEquals(big_int("-55"), big_int("-32") - b_char(23))
    assertEquals(big_int("-65567"), big_int("-32") - b_char(Character.MAX_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - b_char(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - b_char(23))
    assertEquals(big_int("123456789012345678901234502355"), big_int("123456789012345678901234567890") - b_char(Character.MAX_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_char(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - b_char(23))
    assertEquals(big_int("-123456789012345678901234633425"), big_int("-123456789012345678901234567890") - b_char(Character.MAX_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - b_char(0)))
  }

  function testBigIntegerPIntSubtraction() {
    assertEquals(big_int("0"), big_int("0") - p_int(0))
    assertEquals(big_int("-23"), big_int("0") - p_int(23))
    assertEquals(big_int("32"), big_int("0") - p_int(-32))
    assertEquals(big_int("-2147483647"), big_int("0") - p_int(Integer.MAX_VALUE))
    assertEquals(big_int("2147483648"), big_int("0") - p_int(Integer.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - p_int(0))
    assertEquals(big_int("0"), big_int("23") - p_int(23))
    assertEquals(big_int("55"), big_int("23") - p_int(-32))
    assertEquals(big_int("-2147483624"), big_int("23") - p_int(Integer.MAX_VALUE))
    assertEquals(big_int("2147483671"), big_int("23") - p_int(Integer.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - p_int(0))
    assertEquals(big_int("-55"), big_int("-32") - p_int(23))
    assertEquals(big_int("0"), big_int("-32") - p_int(-32))
    assertEquals(big_int("-2147483679"), big_int("-32") - p_int(Integer.MAX_VALUE))
    assertEquals(big_int("2147483616"), big_int("-32") - p_int(Integer.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - p_int(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - p_int(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - p_int(-32))
    assertEquals(big_int("123456789012345678899087084243"), big_int("123456789012345678901234567890") - p_int(Integer.MAX_VALUE))
    assertEquals(big_int("123456789012345678903382051538"), big_int("123456789012345678901234567890") - p_int(Integer.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_int(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - p_int(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - p_int(-32))
    assertEquals(big_int("-123456789012345678903382051537"), big_int("-123456789012345678901234567890") - p_int(Integer.MAX_VALUE))
    assertEquals(big_int("-123456789012345678899087084242"), big_int("-123456789012345678901234567890") - p_int(Integer.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - p_int(0)))
  }

  function testBigIntegerIntegerSubtraction() {
    assertEquals(big_int("0"), big_int("0") - b_int(0))
    assertEquals(big_int("-23"), big_int("0") - b_int(23))
    assertEquals(big_int("32"), big_int("0") - b_int(-32))
    assertEquals(big_int("-2147483647"), big_int("0") - b_int(Integer.MAX_VALUE))
    assertEquals(big_int("2147483648"), big_int("0") - b_int(Integer.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - b_int(0))
    assertEquals(big_int("0"), big_int("23") - b_int(23))
    assertEquals(big_int("55"), big_int("23") - b_int(-32))
    assertEquals(big_int("-2147483624"), big_int("23") - b_int(Integer.MAX_VALUE))
    assertEquals(big_int("2147483671"), big_int("23") - b_int(Integer.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - b_int(0))
    assertEquals(big_int("-55"), big_int("-32") - b_int(23))
    assertEquals(big_int("0"), big_int("-32") - b_int(-32))
    assertEquals(big_int("-2147483679"), big_int("-32") - b_int(Integer.MAX_VALUE))
    assertEquals(big_int("2147483616"), big_int("-32") - b_int(Integer.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - b_int(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - b_int(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - b_int(-32))
    assertEquals(big_int("123456789012345678899087084243"), big_int("123456789012345678901234567890") - b_int(Integer.MAX_VALUE))
    assertEquals(big_int("123456789012345678903382051538"), big_int("123456789012345678901234567890") - b_int(Integer.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_int(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - b_int(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - b_int(-32))
    assertEquals(big_int("-123456789012345678903382051537"), big_int("-123456789012345678901234567890") - b_int(Integer.MAX_VALUE))
    assertEquals(big_int("-123456789012345678899087084242"), big_int("-123456789012345678901234567890") - b_int(Integer.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - b_int(0)))
  }

  function testBigIntegerPLongSubtraction() {
    assertEquals(big_int("0"), big_int("0") - p_long(0))
    assertEquals(big_int("-23"), big_int("0") - p_long(23))
    assertEquals(big_int("32"), big_int("0") - p_long(-32))
    assertEquals(big_int("-9223372036854775807"), big_int("0") - p_long(Long.MAX_VALUE))
    assertEquals(big_int("9223372036854775808"), big_int("0") - p_long(Long.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - p_long(0))
    assertEquals(big_int("0"), big_int("23") - p_long(23))
    assertEquals(big_int("55"), big_int("23") - p_long(-32))
    assertEquals(big_int("-9223372036854775784"), big_int("23") - p_long(Long.MAX_VALUE))
    assertEquals(big_int("9223372036854775831"), big_int("23") - p_long(Long.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - p_long(0))
    assertEquals(big_int("-55"), big_int("-32") - p_long(23))
    assertEquals(big_int("0"), big_int("-32") - p_long(-32))
    assertEquals(big_int("-9223372036854775839"), big_int("-32") - p_long(Long.MAX_VALUE))
    assertEquals(big_int("9223372036854775776"), big_int("-32") - p_long(Long.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - p_long(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - p_long(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - p_long(-32))
    assertEquals(big_int("123456789003122306864379792083"), big_int("123456789012345678901234567890") - p_long(Long.MAX_VALUE))
    assertEquals(big_int("123456789021569050938089343698"), big_int("123456789012345678901234567890") - p_long(Long.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_long(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - p_long(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - p_long(-32))
    assertEquals(big_int("-123456789021569050938089343697"), big_int("-123456789012345678901234567890") - p_long(Long.MAX_VALUE))
    assertEquals(big_int("-123456789003122306864379792082"), big_int("-123456789012345678901234567890") - p_long(Long.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - p_long(0)))
  }

  function testBigIntegerLongSubtraction() {
    assertEquals(big_int("0"), big_int("0") - b_long(0))
    assertEquals(big_int("-23"), big_int("0") - b_long(23))
    assertEquals(big_int("32"), big_int("0") - b_long(-32))
    assertEquals(big_int("-9223372036854775807"), big_int("0") - b_long(Long.MAX_VALUE))
    assertEquals(big_int("9223372036854775808"), big_int("0") - b_long(Long.MIN_VALUE))

    assertEquals(big_int("23"), big_int("23") - b_long(0))
    assertEquals(big_int("0"), big_int("23") - b_long(23))
    assertEquals(big_int("55"), big_int("23") - b_long(-32))
    assertEquals(big_int("-9223372036854775784"), big_int("23") - b_long(Long.MAX_VALUE))
    assertEquals(big_int("9223372036854775831"), big_int("23") - b_long(Long.MIN_VALUE))

    assertEquals(big_int("-32"), big_int("-32") - b_long(0))
    assertEquals(big_int("-55"), big_int("-32") - b_long(23))
    assertEquals(big_int("0"), big_int("-32") - b_long(-32))
    assertEquals(big_int("-9223372036854775839"), big_int("-32") - b_long(Long.MAX_VALUE))
    assertEquals(big_int("9223372036854775776"), big_int("-32") - b_long(Long.MIN_VALUE))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - b_long(0))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - b_long(23))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - b_long(-32))
    assertEquals(big_int("123456789003122306864379792083"), big_int("123456789012345678901234567890") - b_long(Long.MAX_VALUE))
    assertEquals(big_int("123456789021569050938089343698"), big_int("123456789012345678901234567890") - b_long(Long.MIN_VALUE))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_long(0))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - b_long(23))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - b_long(-32))
    assertEquals(big_int("-123456789021569050938089343697"), big_int("-123456789012345678901234567890") - b_long(Long.MAX_VALUE))
    assertEquals(big_int("-123456789003122306864379792082"), big_int("-123456789012345678901234567890") - b_long(Long.MIN_VALUE))

    assertEquals(BigInteger, statictypeof(big_int("0") - b_long(0)))
  }

  function testBigIntegerPFloatSubtraction() {
    assertEquals(big_decimal("0.0"), big_int("0") - p_float(0.0))
    assertEquals(big_decimal("-23.0"), big_int("0") - p_float(23.0))
    assertEquals(big_decimal("-23.123"), big_int("0") - p_float(23.123))
    assertEquals(big_decimal("32.0"), big_int("0") - p_float(-32.0))
    assertEquals(big_decimal("32.456"), big_int("0") - p_float(-32.456))
    // Skipped test assertEquals(something, big_int("0") - p_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - p_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - p_float(Float.NaN_))
    assertEquals(big_decimal("-340282350000000000000000000000000000000"), big_int("0") - p_float(Float.MAX_VALUE))
    assertEquals(big_decimal("-1.4E-45"), big_int("0") - p_float(Float.MIN_VALUE))

    assertEquals(big_decimal("23.0"), big_int("23") - p_float(0.0))
    assertEquals(big_decimal("0.0"), big_int("23") - p_float(23.0))
    assertEquals(big_decimal("-0.123"), big_int("23") - p_float(23.123))
    assertEquals(big_decimal("55.0"), big_int("23") - p_float(-32.0))
    assertEquals(big_decimal("55.456"), big_int("23") - p_float(-32.456))
    // Skipped test assertEquals(something, big_int("23") - p_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - p_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - p_float(Float.NaN_))
    assertEquals(big_decimal("-340282349999999999999999999999999999977"), big_int("23") - p_float(Float.MAX_VALUE))
    assertEquals(big_decimal("22.9999999999999999999999999999999999999999999986"), big_int("23") - p_float(Float.MIN_VALUE))

    assertEquals(big_decimal("-32.0"), big_int("-32") - p_float(0.0))
    assertEquals(big_decimal("-55.0"), big_int("-32") - p_float(23.0))
    assertEquals(big_decimal("-55.123"), big_int("-32") - p_float(23.123))
    assertEquals(big_decimal("0.0"), big_int("-32") - p_float(-32.0))
    assertEquals(big_decimal("0.456"), big_int("-32") - p_float(-32.456))
    // Skipped test assertEquals(something, big_int("-32") - p_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - p_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - p_float(Float.NaN_))
    assertEquals(big_decimal("-340282350000000000000000000000000000032"), big_int("-32") - p_float(Float.MAX_VALUE))
    assertEquals(big_decimal("-32.0000000000000000000000000000000000000000000014"), big_int("-32") - p_float(Float.MIN_VALUE))

    assertEquals(big_decimal("123456789012345678901234567890.0"), big_int("123456789012345678901234567890") - p_float(0.0))
    assertEquals(big_decimal("123456789012345678901234567867.0"), big_int("123456789012345678901234567890") - p_float(23.0))
    assertEquals(big_decimal("123456789012345678901234567866.877"), big_int("123456789012345678901234567890") - p_float(23.123))
    assertEquals(big_decimal("123456789012345678901234567922.0"), big_int("123456789012345678901234567890") - p_float(-32.0))
    assertEquals(big_decimal("123456789012345678901234567922.456"), big_int("123456789012345678901234567890") - p_float(-32.456))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - p_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - p_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - p_float(Float.NaN_))
    assertEquals(big_decimal("-340282349876543210987654321098765432110"), big_int("123456789012345678901234567890") - p_float(Float.MAX_VALUE))
    assertEquals(big_decimal("123456789012345678901234567889.9999999999999999999999999999999999999999999986"), big_int("123456789012345678901234567890") - p_float(Float.MIN_VALUE))

    assertEquals(big_decimal("-123456789012345678901234567890.0"), big_int("-123456789012345678901234567890") - p_float(0.0))
    assertEquals(big_decimal("-123456789012345678901234567913.0"), big_int("-123456789012345678901234567890") - p_float(23.0))
    assertEquals(big_decimal("-123456789012345678901234567913.123"), big_int("-123456789012345678901234567890") - p_float(23.123))
    assertEquals(big_decimal("-123456789012345678901234567858.0"), big_int("-123456789012345678901234567890") - p_float(-32.0))
    assertEquals(big_decimal("-123456789012345678901234567857.544"), big_int("-123456789012345678901234567890") - p_float(-32.456))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - p_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - p_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - p_float(Float.NaN_))
    assertEquals(big_decimal("-340282350123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_float(Float.MAX_VALUE))
    assertEquals(big_decimal("-123456789012345678901234567890.0000000000000000000000000000000000000000000014"), big_int("-123456789012345678901234567890") - p_float(Float.MIN_VALUE))

    assertEquals(BigDecimal, statictypeof(big_int("0") - p_float(0.0)))
  }

  function testBigIntegerFloatSubtraction() {
    assertEquals(big_decimal("0.0"), big_int("0") - b_float(0.0))
    assertEquals(big_decimal("-23.0"), big_int("0") - b_float(23.0))
    assertEquals(big_decimal("-23.123"), big_int("0") - b_float(23.123))
    assertEquals(big_decimal("32.0"), big_int("0") - b_float(-32.0))
    assertEquals(big_decimal("32.456"), big_int("0") - b_float(-32.456))
    // Skipped test assertEquals(something, big_int("0") - b_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - b_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - b_float(Float.NaN_))
    assertEquals(big_decimal("-340282350000000000000000000000000000000"), big_int("0") - b_float(Float.MAX_VALUE))
    assertEquals(big_decimal("-1.4E-45"), big_int("0") - b_float(Float.MIN_VALUE))

    assertEquals(big_decimal("23.0"), big_int("23") - b_float(0.0))
    assertEquals(big_decimal("0.0"), big_int("23") - b_float(23.0))
    assertEquals(big_decimal("-0.123"), big_int("23") - b_float(23.123))
    assertEquals(big_decimal("55.0"), big_int("23") - b_float(-32.0))
    assertEquals(big_decimal("55.456"), big_int("23") - b_float(-32.456))
    // Skipped test assertEquals(something, big_int("23") - b_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - b_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - b_float(Float.NaN_))
    assertEquals(big_decimal("-340282349999999999999999999999999999977"), big_int("23") - b_float(Float.MAX_VALUE))
    assertEquals(big_decimal("22.9999999999999999999999999999999999999999999986"), big_int("23") - b_float(Float.MIN_VALUE))

    assertEquals(big_decimal("-32.0"), big_int("-32") - b_float(0.0))
    assertEquals(big_decimal("-55.0"), big_int("-32") - b_float(23.0))
    assertEquals(big_decimal("-55.123"), big_int("-32") - b_float(23.123))
    assertEquals(big_decimal("0.0"), big_int("-32") - b_float(-32.0))
    assertEquals(big_decimal("0.456"), big_int("-32") - b_float(-32.456))
    // Skipped test assertEquals(something, big_int("-32") - b_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - b_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - b_float(Float.NaN_))
    assertEquals(big_decimal("-340282350000000000000000000000000000032"), big_int("-32") - b_float(Float.MAX_VALUE))
    assertEquals(big_decimal("-32.0000000000000000000000000000000000000000000014"), big_int("-32") - b_float(Float.MIN_VALUE))

    assertEquals(big_decimal("123456789012345678901234567890.0"), big_int("123456789012345678901234567890") - b_float(0.0))
    assertEquals(big_decimal("123456789012345678901234567867.0"), big_int("123456789012345678901234567890") - b_float(23.0))
    assertEquals(big_decimal("123456789012345678901234567866.877"), big_int("123456789012345678901234567890") - b_float(23.123))
    assertEquals(big_decimal("123456789012345678901234567922.0"), big_int("123456789012345678901234567890") - b_float(-32.0))
    assertEquals(big_decimal("123456789012345678901234567922.456"), big_int("123456789012345678901234567890") - b_float(-32.456))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - b_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - b_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - b_float(Float.NaN_))
    assertEquals(big_decimal("-340282349876543210987654321098765432110"), big_int("123456789012345678901234567890") - b_float(Float.MAX_VALUE))
    assertEquals(big_decimal("123456789012345678901234567889.9999999999999999999999999999999999999999999986"), big_int("123456789012345678901234567890") - b_float(Float.MIN_VALUE))

    assertEquals(big_decimal("-123456789012345678901234567890.0"), big_int("-123456789012345678901234567890") - b_float(0.0))
    assertEquals(big_decimal("-123456789012345678901234567913.0"), big_int("-123456789012345678901234567890") - b_float(23.0))
    assertEquals(big_decimal("-123456789012345678901234567913.123"), big_int("-123456789012345678901234567890") - b_float(23.123))
    assertEquals(big_decimal("-123456789012345678901234567858.0"), big_int("-123456789012345678901234567890") - b_float(-32.0))
    assertEquals(big_decimal("-123456789012345678901234567857.544"), big_int("-123456789012345678901234567890") - b_float(-32.456))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - b_float(Float.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - b_float(Float.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - b_float(Float.NaN_))
    assertEquals(big_decimal("-340282350123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_float(Float.MAX_VALUE))
    assertEquals(big_decimal("-123456789012345678901234567890.0000000000000000000000000000000000000000000014"), big_int("-123456789012345678901234567890") - b_float(Float.MIN_VALUE))

    assertEquals(BigDecimal, statictypeof(big_int("0") - b_float(0.0)))
  }

  function testBigIntegerPDoubleSubtraction() {
    assertEquals(big_decimal("0.0"), big_int("0") - p_double(0.0))
    assertEquals(big_decimal("-23.0"), big_int("0") - p_double(23.0))
    assertEquals(big_decimal("-23.123"), big_int("0") - p_double(23.123))
    assertEquals(big_decimal("32.0"), big_int("0") - p_double(-32.0))
    assertEquals(big_decimal("32.456"), big_int("0") - p_double(-32.456))
    // Skipped test assertEquals(something, big_int("0") - p_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - p_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - p_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), big_int("0") - p_double(Double.MAX_VALUE))
    assertEquals(big_decimal("-4.9E-324"), big_int("0") - p_double(Double.MIN_VALUE))

    assertEquals(big_decimal("23.0"), big_int("23") - p_double(0.0))
    assertEquals(big_decimal("0.0"), big_int("23") - p_double(23.0))
    assertEquals(big_decimal("-0.123"), big_int("23") - p_double(23.123))
    assertEquals(big_decimal("55.0"), big_int("23") - p_double(-32.0))
    assertEquals(big_decimal("55.456"), big_int("23") - p_double(-32.456))
    // Skipped test assertEquals(something, big_int("23") - p_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - p_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - p_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231569999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977"), big_int("23") - p_double(Double.MAX_VALUE))
    assertEquals(big_decimal("22.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999951"), big_int("23") - p_double(Double.MIN_VALUE))

    assertEquals(big_decimal("-32.0"), big_int("-32") - p_double(0.0))
    assertEquals(big_decimal("-55.0"), big_int("-32") - p_double(23.0))
    assertEquals(big_decimal("-55.123"), big_int("-32") - p_double(23.123))
    assertEquals(big_decimal("0.0"), big_int("-32") - p_double(-32.0))
    assertEquals(big_decimal("0.456"), big_int("-32") - p_double(-32.456))
    // Skipped test assertEquals(something, big_int("-32") - p_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - p_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - p_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032"), big_int("-32") - p_double(Double.MAX_VALUE))
    assertEquals(big_decimal("-32.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049"), big_int("-32") - p_double(Double.MIN_VALUE))

    assertEquals(big_decimal("123456789012345678901234567890.0"), big_int("123456789012345678901234567890") - p_double(0.0))
    assertEquals(big_decimal("123456789012345678901234567867.0"), big_int("123456789012345678901234567890") - p_double(23.0))
    assertEquals(big_decimal("123456789012345678901234567866.877"), big_int("123456789012345678901234567890") - p_double(23.123))
    assertEquals(big_decimal("123456789012345678901234567922.0"), big_int("123456789012345678901234567890") - p_double(-32.0))
    assertEquals(big_decimal("123456789012345678901234567922.456"), big_int("123456789012345678901234567890") - p_double(-32.456))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - p_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - p_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - p_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231569999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999876543210987654321098765432110"), big_int("123456789012345678901234567890") - p_double(Double.MAX_VALUE))
    assertEquals(big_decimal("123456789012345678901234567889.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999951"), big_int("123456789012345678901234567890") - p_double(Double.MIN_VALUE))

    assertEquals(big_decimal("-123456789012345678901234567890.0"), big_int("-123456789012345678901234567890") - p_double(0.0))
    assertEquals(big_decimal("-123456789012345678901234567913.0"), big_int("-123456789012345678901234567890") - p_double(23.0))
    assertEquals(big_decimal("-123456789012345678901234567913.123"), big_int("-123456789012345678901234567890") - p_double(23.123))
    assertEquals(big_decimal("-123456789012345678901234567858.0"), big_int("-123456789012345678901234567890") - p_double(-32.0))
    assertEquals(big_decimal("-123456789012345678901234567857.544"), big_int("-123456789012345678901234567890") - p_double(-32.456))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - p_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - p_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - p_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000123456789012345678901234567890"), big_int("-123456789012345678901234567890") - p_double(Double.MAX_VALUE))
    assertEquals(big_decimal("-123456789012345678901234567890.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049"), big_int("-123456789012345678901234567890") - p_double(Double.MIN_VALUE))

    assertEquals(BigDecimal, statictypeof(big_int("0") - p_double(0.0)))
  }

  function testBigIntegerDoubleSubtraction() {
    assertEquals(big_decimal("0.0"), big_int("0") - b_double(0.0))
    assertEquals(big_decimal("-23.0"), big_int("0") - b_double(23.0))
    assertEquals(big_decimal("-23.123"), big_int("0") - b_double(23.123))
    assertEquals(big_decimal("32.0"), big_int("0") - b_double(-32.0))
    assertEquals(big_decimal("32.456"), big_int("0") - b_double(-32.456))
    // Skipped test assertEquals(something, big_int("0") - b_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - b_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("0") - b_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), big_int("0") - b_double(Double.MAX_VALUE))
    assertEquals(big_decimal("-4.9E-324"), big_int("0") - b_double(Double.MIN_VALUE))

    assertEquals(big_decimal("23.0"), big_int("23") - b_double(0.0))
    assertEquals(big_decimal("0.0"), big_int("23") - b_double(23.0))
    assertEquals(big_decimal("-0.123"), big_int("23") - b_double(23.123))
    assertEquals(big_decimal("55.0"), big_int("23") - b_double(-32.0))
    assertEquals(big_decimal("55.456"), big_int("23") - b_double(-32.456))
    // Skipped test assertEquals(something, big_int("23") - b_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - b_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("23") - b_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231569999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977"), big_int("23") - b_double(Double.MAX_VALUE))
    assertEquals(big_decimal("22.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999951"), big_int("23") - b_double(Double.MIN_VALUE))

    assertEquals(big_decimal("-32.0"), big_int("-32") - b_double(0.0))
    assertEquals(big_decimal("-55.0"), big_int("-32") - b_double(23.0))
    assertEquals(big_decimal("-55.123"), big_int("-32") - b_double(23.123))
    assertEquals(big_decimal("0.0"), big_int("-32") - b_double(-32.0))
    assertEquals(big_decimal("0.456"), big_int("-32") - b_double(-32.456))
    // Skipped test assertEquals(something, big_int("-32") - b_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - b_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-32") - b_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032"), big_int("-32") - b_double(Double.MAX_VALUE))
    assertEquals(big_decimal("-32.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049"), big_int("-32") - b_double(Double.MIN_VALUE))

    assertEquals(big_decimal("123456789012345678901234567890.0"), big_int("123456789012345678901234567890") - b_double(0.0))
    assertEquals(big_decimal("123456789012345678901234567867.0"), big_int("123456789012345678901234567890") - b_double(23.0))
    assertEquals(big_decimal("123456789012345678901234567866.877"), big_int("123456789012345678901234567890") - b_double(23.123))
    assertEquals(big_decimal("123456789012345678901234567922.0"), big_int("123456789012345678901234567890") - b_double(-32.0))
    assertEquals(big_decimal("123456789012345678901234567922.456"), big_int("123456789012345678901234567890") - b_double(-32.456))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - b_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - b_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("123456789012345678901234567890") - b_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231569999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999876543210987654321098765432110"), big_int("123456789012345678901234567890") - b_double(Double.MAX_VALUE))
    assertEquals(big_decimal("123456789012345678901234567889.9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999951"), big_int("123456789012345678901234567890") - b_double(Double.MIN_VALUE))

    assertEquals(big_decimal("-123456789012345678901234567890.0"), big_int("-123456789012345678901234567890") - b_double(0.0))
    assertEquals(big_decimal("-123456789012345678901234567913.0"), big_int("-123456789012345678901234567890") - b_double(23.0))
    assertEquals(big_decimal("-123456789012345678901234567913.123"), big_int("-123456789012345678901234567890") - b_double(23.123))
    assertEquals(big_decimal("-123456789012345678901234567858.0"), big_int("-123456789012345678901234567890") - b_double(-32.0))
    assertEquals(big_decimal("-123456789012345678901234567857.544"), big_int("-123456789012345678901234567890") - b_double(-32.456))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - b_double(Double.POSITIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - b_double(Double.NEGATIVE_INFINITY))
    // Skipped test assertEquals(something, big_int("-123456789012345678901234567890") - b_double(Double.NaN_))
    assertEquals(big_decimal("-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000123456789012345678901234567890"), big_int("-123456789012345678901234567890") - b_double(Double.MAX_VALUE))
    assertEquals(big_decimal("-123456789012345678901234567890.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049"), big_int("-123456789012345678901234567890") - b_double(Double.MIN_VALUE))

    assertEquals(BigDecimal, statictypeof(big_int("0") - b_double(0.0)))
  }

  function testBigIntegerBigIntegerSubtraction() {
    assertEquals(big_int("0"), big_int("0") - big_int("0"))
    assertEquals(big_int("-23"), big_int("0") - big_int("23"))
    assertEquals(big_int("32"), big_int("0") - big_int("-32"))
    assertEquals(big_int("-123456789012345678901234567890"), big_int("0") - big_int("123456789012345678901234567890"))
    assertEquals(big_int("123456789012345678901234567890"), big_int("0") - big_int("-123456789012345678901234567890"))

    assertEquals(big_int("23"), big_int("23") - big_int("0"))
    assertEquals(big_int("0"), big_int("23") - big_int("23"))
    assertEquals(big_int("55"), big_int("23") - big_int("-32"))
    assertEquals(big_int("-123456789012345678901234567867"), big_int("23") - big_int("123456789012345678901234567890"))
    assertEquals(big_int("123456789012345678901234567913"), big_int("23") - big_int("-123456789012345678901234567890"))

    assertEquals(big_int("-32"), big_int("-32") - big_int("0"))
    assertEquals(big_int("-55"), big_int("-32") - big_int("23"))
    assertEquals(big_int("0"), big_int("-32") - big_int("-32"))
    assertEquals(big_int("-123456789012345678901234567922"), big_int("-32") - big_int("123456789012345678901234567890"))
    assertEquals(big_int("123456789012345678901234567858"), big_int("-32") - big_int("-123456789012345678901234567890"))

    assertEquals(big_int("123456789012345678901234567890"), big_int("123456789012345678901234567890") - big_int("0"))
    assertEquals(big_int("123456789012345678901234567867"), big_int("123456789012345678901234567890") - big_int("23"))
    assertEquals(big_int("123456789012345678901234567922"), big_int("123456789012345678901234567890") - big_int("-32"))
    assertEquals(big_int("0"), big_int("123456789012345678901234567890") - big_int("123456789012345678901234567890"))
    assertEquals(big_int("246913578024691357802469135780"), big_int("123456789012345678901234567890") - big_int("-123456789012345678901234567890"))

    assertEquals(big_int("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - big_int("0"))
    assertEquals(big_int("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - big_int("23"))
    assertEquals(big_int("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - big_int("-32"))
    assertEquals(big_int("-246913578024691357802469135780"), big_int("-123456789012345678901234567890") - big_int("123456789012345678901234567890"))
    assertEquals(big_int("0"), big_int("-123456789012345678901234567890") - big_int("-123456789012345678901234567890"))

    assertEquals(BigInteger, statictypeof(big_int("0") - big_int("0")))
  }

  function testBigIntegerBigDecimalSubtraction() {
    assertEquals(big_decimal("0"), big_int("0") - big_decimal("0"))
    assertEquals(big_decimal("-23"), big_int("0") - big_decimal("23"))
    assertEquals(big_decimal("-23.123"), big_int("0") - big_decimal("23.123"))
    assertEquals(big_decimal("32"), big_int("0") - big_decimal("-32"))
    assertEquals(big_decimal("32.456"), big_int("0") - big_decimal("-32.456"))
    assertEquals(big_decimal("-123456789012345678901234567890.123456789"), big_int("0") - big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("123456789012345678901234567890.123456789"), big_int("0") - big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("23"), big_int("23") - big_decimal("0"))
    assertEquals(big_decimal("0"), big_int("23") - big_decimal("23"))
    assertEquals(big_decimal("-0.123"), big_int("23") - big_decimal("23.123"))
    assertEquals(big_decimal("55"), big_int("23") - big_decimal("-32"))
    assertEquals(big_decimal("55.456"), big_int("23") - big_decimal("-32.456"))
    assertEquals(big_decimal("-123456789012345678901234567867.123456789"), big_int("23") - big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("123456789012345678901234567913.123456789"), big_int("23") - big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("-32"), big_int("-32") - big_decimal("0"))
    assertEquals(big_decimal("-55"), big_int("-32") - big_decimal("23"))
    assertEquals(big_decimal("-55.123"), big_int("-32") - big_decimal("23.123"))
    assertEquals(big_decimal("0"), big_int("-32") - big_decimal("-32"))
    assertEquals(big_decimal("0.456"), big_int("-32") - big_decimal("-32.456"))
    assertEquals(big_decimal("-123456789012345678901234567922.123456789"), big_int("-32") - big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("123456789012345678901234567858.123456789"), big_int("-32") - big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("123456789012345678901234567890"), big_int("123456789012345678901234567890") - big_decimal("0"))
    assertEquals(big_decimal("123456789012345678901234567867"), big_int("123456789012345678901234567890") - big_decimal("23"))
    assertEquals(big_decimal("123456789012345678901234567866.877"), big_int("123456789012345678901234567890") - big_decimal("23.123"))
    assertEquals(big_decimal("123456789012345678901234567922"), big_int("123456789012345678901234567890") - big_decimal("-32"))
    assertEquals(big_decimal("123456789012345678901234567922.456"), big_int("123456789012345678901234567890") - big_decimal("-32.456"))
    assertEquals(big_decimal("-0.123456789"), big_int("123456789012345678901234567890") - big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("246913578024691357802469135780.123456789"), big_int("123456789012345678901234567890") - big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(big_decimal("-123456789012345678901234567890"), big_int("-123456789012345678901234567890") - big_decimal("0"))
    assertEquals(big_decimal("-123456789012345678901234567913"), big_int("-123456789012345678901234567890") - big_decimal("23"))
    assertEquals(big_decimal("-123456789012345678901234567913.123"), big_int("-123456789012345678901234567890") - big_decimal("23.123"))
    assertEquals(big_decimal("-123456789012345678901234567858"), big_int("-123456789012345678901234567890") - big_decimal("-32"))
    assertEquals(big_decimal("-123456789012345678901234567857.544"), big_int("-123456789012345678901234567890") - big_decimal("-32.456"))
    assertEquals(big_decimal("-246913578024691357802469135780.123456789"), big_int("-123456789012345678901234567890") - big_decimal("123456789012345678901234567890.123456789"))
    assertEquals(big_decimal("0.123456789"), big_int("-123456789012345678901234567890") - big_decimal("-123456789012345678901234567890.123456789"))

    assertEquals(BigDecimal, statictypeof(big_int("0") - big_decimal("0")))
  }

}

