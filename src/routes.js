const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler')

const routes = [
  // menyimpan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },

  // menampilkan seluruh buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },

  // Detail buku
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },

  // Ubah data buku
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler
  },

  // hapus buku
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
