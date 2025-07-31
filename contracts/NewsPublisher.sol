// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NewsPublisher
 * @dev Simple contract to publish articles and vote on them.
 */
contract NewsPublisher is Ownable {
    struct Article {
        uint256 id;
        address author;
        string title;
        string content;
        uint256 votes;
    }

    Article[] private articles;
    mapping(uint256 => mapping(address => bool)) private hasVoted;

    event ArticlePublished(uint256 indexed id, address indexed author, string title);
    event ArticleVoted(uint256 indexed id, address indexed voter);

    /**
     * @dev Publish a new article. Only the contract owner may call this.
     */
    function publishArticle(string calldata title, string calldata content) external onlyOwner {
        uint256 id = articles.length;
        articles.push(Article({
            id: id,
            author: msg.sender,
            title: title,
            content: content,
            votes: 0
        }));
        emit ArticlePublished(id, msg.sender, title);
    }

    /**
     * @dev Vote for a given article. Each address may vote once per article.
     */
    function vote(uint256 articleId) external {
        require(articleId < articles.length, "Invalid article");
        require(!hasVoted[articleId][msg.sender], "Already voted");

        hasVoted[articleId][msg.sender] = true;
        articles[articleId].votes += 1;

        emit ArticleVoted(articleId, msg.sender);
    }

    /**
     * @dev Return all published articles.
     */
    function getAllArticles() external view returns (Article[] memory) {
        return articles;
    }
}
