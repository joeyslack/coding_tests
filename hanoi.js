var stacks = [[4, 3, 2, 1], new Array(), new Array()];

function move(from, dest) {
  if (dest && from && from.length > 0) {
    var disc = from[from.length - 1];
    var destTop = (dest && dest.length ? dest[dest.length - 1] : 0);
    // console.log('_move_', disc, destTop);

    if (dest.length == 0 || disc < destTop) {
      from.pop();
      dest.push(disc);
      // console.log('pushing', disc);
      return true;
    }
  }

  return false;
}

function doStack(n, source, dest, inter) {
  if (n === 1) {
      console.log('n==1', stacks);
      move(source, dest);
      return;
  }

  doStack(n - 1, source, inter, dest);
  move(source, dest);
  doStack(n - 1, inter, dest, source);
}

var result = doStack(stacks[0].length, stacks[0], stacks[2], stacks[1]);
console.log('=Result=', stacks);
