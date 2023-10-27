package br.com.rss.AppProdutos.service.interfaces;


import java.util.List;
import java.util.Optional;

import br.com.rss.AppProdutos.model.Produto;

public interface ProdutoServiceInterface {
	Produto save(Produto produto);
	Optional<Produto> getById(Long id);
	List<Produto> getAll();
	Produto update(Produto produto);
	void delete(Long id);
}
