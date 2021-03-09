<?php

namespace App\Interfaces;
use App\Models\Article;
use App\Models\ArticlesCategory;
use Illuminate\Http\Request;
use App\Http\Requests\ArticleRequest;
use App\Http\Requests\ArticleStatusRequest;

interface ArticleRepositoryInterface
{
    /**
     * Get all Article
     *
     * @method  GET api/v1/c-admin/articles
     * @access  public
     */
    public function getAllArticles();

    /**
     * Get one Article By ID
     *
     * @param   \App\Models\Article   $article
     *
     * @method  GET api/v1/c-admin/articles
     * @access  public
     */
    public function getArticleById(Article $article);

    /**
     * Get Articles By an category's ID
     *
     * @param   \App\Models\ArticlesCategory   $articlesCategory
     *
     * @method  GET api/v1/c-admin/articles/categories/$category
     * @access  public
     */
    public function getArticlesByIdCategory(ArticlesCategory $articlesCategory);

    /**
     * Get Articles By status
     *
     * @param   \App\Http\Requests\ArticleStatusRequest    $request
     *
     * @method  GET api/v1/c-admin/articles/status/$status
     * @access  public
     */
    public function getArticlesByStatus(ArticleStatusRequest $request);

    /**
     * Create | Update Article
     *
     * @param   \App\Http\Requests\ArticleRequest    $request
     * @param   integer                              $id
     *
     * @method  POST    api/v1/c-admin/articles              For Create
     * @method  PUT     api/v1/c-admin/articles/$id          For Update
     * @access  public
     */
    public function requestArticle(ArticleRequest $request, $id = null);

    /**
     * Get filtered Article using params passed in URL
     * @param   \Illuminate\Http\Request    $request
     *
     * @method  GET api/v1/c-admin/articles/filter
     * @access  public
     */
    public function filterByUrlParams(Request $request);

    /**
     * Disable an Article
     *
     * @param   integer     $id
     *
     * @method  POST    api/v1/c-admin/articles/{id}/disable
     * @access  public
     */
    public function disableArticle($id);
}
