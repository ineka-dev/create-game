import { Engine, OuterNode } from '@ineka/engine';

const game = new Engine({});

const node = new OuterNode(game);
game.rootNode = node;

console.log(game);

game.run();