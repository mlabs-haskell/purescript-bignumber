import BigNumber from 'bignumber.js';

export function parseBigNumberImpl(Left, Right, s) {
    var x;
    try {
        x = new BigNumber(s);
    } catch (e) {
        return Left(e);
    }
    return Right(x);
}

export function isBigNumber(x) {
    return BigNumber.isBigNumber(x);
}

export function randomBigNumber() {
    return BigNumber.random();
}

export function absImpl(x) {
    return x.abs();
}

export function compareBigNumberImpl(LT, EQ, GT, x, y) {
    var r = x.comparedTo(y);
    if (r === -1) {
        return LT;
    } else if (r === 0) {
        return EQ;
    } else if (r === 1) {
        return GT;
    }
}

export function decimalPlacesImpl(x, y) {
    return x.decimalPlaces(y);
}

export function divBigNumberImpl(x, y) {
    return x.div(y);
}

export function idivBigNumberImpl(x, y) {
    return x.idiv(y);
}

export function powBigNumberImpl(x, y) {
    return x.pow(y);
}

export function intValue(x) {
    return x.integerValue();
}

export function eqBigNumberImpl(x, y) {
    return x.eq(y);
}

export function isFinite(x) {
    return x.isFinite();
}

export function gtBigNumberImpl(x, y) {
    return x.gt(y);
}

export function gteBigNumberImpl(x, y) {
    return x.gte(y);
}

export function isInteger(x) {
    return x.isInteger();
}

export function ltBigNumberImpl(x, y) {
    return x.lt(y);
}

export function lteBigNumberImpl(x, y) {
    return x.lte(y);
}

export function isNaN(x) {
    return x.isNaN();
}

export function isNegative(x) {
    return x.isNegative();
}

export function isPositive(x) {
    return x.isPositive();
}

export function isZero(x) {
    return x.isZero();
}

export function minusBigNumberImpl(x, y) {
    return x.minus(y);
}

export function moduloBigNumberImpl(x, y) {
    return x.modulo(y);
}

export function timesBigNumberImpl(x, y) {
    return x.times(y);
}

export function negateImpl(x) {
    return x.negated();
}

export function plusBigNumberImpl(x, y) {
    return x.plus(y);
}

export function precisionImpl(x, y) {
    return x.precision(y);
}

export function shiftedByImpl(x, y) {
    return x.shiftedBy(y);
}

export function toNumber(x) {
    return x.toNumber();
}

export function toString(x) {
    return x.toString();
}

export function toExponential(x) {
    return x.toExponential();
}

export function toFixed(x) {
    return x.toFixed();
}

export function toFormat(x) {
    return x.toFormat();
}

export function toFractionImpl(tuple) {
    return function toFractionImpl (x, maximum_denominator) {
        var fraction = x.toFraction(maximum_denominator);
        return tuple(fraction[0])(fraction[1]);
    };
}

export function valueOf(x) {
    return x.valueOf();
}

export function sqrt(x) {
    return x.sqrt();
}

export function fromNumber(x) {
    return new BigNumber(x);
}

