pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/* This is a super simple ERC20 where everything must be set at deployment time.
 * There is no owner and no changes are possible after deployment.
 * Usecases include testing, memecoins, fixed supply utility tokens, etc...
 */
contract ImmutableERC20 is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 maxSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, maxSupply);
    }
}
