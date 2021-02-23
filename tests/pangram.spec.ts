// spec of kata https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript
import { assert } from "chai";
import {isPangram} from "../src/pangram";



describe("example", function() {
    it("test", function() {
        assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
        assert.strictEqual(isPangram("This is not a pangram."), false);
    });
});