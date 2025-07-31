const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NewsPublisher", function () {
  let owner, other, newsPublisher;

  beforeEach(async function () {
    [owner, other] = await ethers.getSigners();
    const NewsPublisher = await ethers.getContractFactory("NewsPublisher");
    newsPublisher = await NewsPublisher.deploy();
    await newsPublisher.waitForDeployment();
  });

  it("owner can publish articles", async function () {
    await expect(newsPublisher.publishArticle("title", "content"))
      .to.emit(newsPublisher, "ArticlePublished")
      .withArgs(0, owner.address, "title");
    const articles = await newsPublisher.getAllArticles();
    expect(articles.length).to.equal(1);
  });

  it("non-owner cannot publish articles", async function () {
    await expect(newsPublisher.connect(other).publishArticle("x", "y"))
      .to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("allows voting only once", async function () {
    await newsPublisher.publishArticle("title", "content");
    await newsPublisher.connect(other).vote(0);
    await expect(newsPublisher.connect(other).vote(0)).to.be.revertedWith("Already voted");
    const articles = await newsPublisher.getAllArticles();
    expect(articles[0].votes).to.equal(1);
  });
});
