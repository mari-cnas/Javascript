function getName () {
    return "mariana Carvalho Nascimento";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult= logFn;

logFnResult(getName);
