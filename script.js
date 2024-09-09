const prices = {
                              bitcoin: document.getElementById('bitcoin-price'),
                              ethereum: document.getElementById('ethereum-price'),
                              shiba: document.getElementById('shiba-price'),
                              solana: document.getElementById('solana-price')
                          };
                          
                          async function fetchPrices() {
                              try {
                                  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,shiba-inu,solana&vs_currencies=usd');
                                  const data = await response.json();
                                  prices.bitcoin.textContent = `${data.bitcoin.usd} دلار`;
                                  prices.ethereum.textContent = `${data.ethereum.usd} دلار`;
                                  prices.shiba.textContent = `${data['shiba-inu'].usd} دلار`;
                                  prices.solana.textContent = `${data.solana.usd} دلار`;
                              } catch (error) {
                                  console.error('خطا در دریافت قیمت‌ها:', error);
                              }
                          }
                          
                          fetchPrices();
                          setInterval(fetchPrices, 60000); // به‌روزرسانی هر 60 ثانیه
                          