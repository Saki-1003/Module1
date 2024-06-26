const book = {
  'title': 'The Sun Also Rises',
  'description': "The quintessential novel of the Lost Generation, The Sun Also Rises (Fiesta) is one of Ernest Hemingway's masterpieces and a classic example of his spare but powerful writing style.",
  'auther': 'Earnest Hemingway',
  'number_of_pages': 500
}

console.log(book.title);
console.log(book.description);
console.log(book.auther);
console.log(book.number_of_pages);

book.description = "A poignant look at the disillusionment and angst of the post-World War I generation, the novel introduces two of Hemingway's most unforgettable characters: Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of 1920s Paris to the brutal bullfighting rings of Spain with a motley group of expatriates. It is an age of moral bankruptcy, spiritual dissolution, unrealized love, and vanishing illusions. First published in 1926, The Sun Also Rises helped to establish Hemingway as one of the greatest writers of the twentieth century.";
console.log(book.description);