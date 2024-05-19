class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = "";
        document.body.style.overflow = "scroll";
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = ``;
        let sumOfCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                sumOfCatalog += price;
                htmlCatalog += `
                <tr>
                    <td class='shopping-elem__name'>⚡️${name}</td>
                    <td class='shopping-price'>${price.toLocaleString()} USD</td>
                </tr>
            `;
            }
        });

        const html = `  
         <div class='shopping-container'>
            <table>
               ${htmlCatalog}  
               <tr>
                    <td class='shopping-elem__name'>⚡️ Сумма:</td>
                    <td class='total-price'>${sumOfCatalog.toLocaleString()} USD</td>
               </tr>
            </table>

            <button class="btn-close" onclick = "shoppingPage.handlerClear()"><img src="./img/free-icon-cancel-130887.png" alt="Close" /></button>
        </div>`;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
