using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await _context.Baskets
            .Include(i => i.Items)
            .ThenInclude(p => p.Product)
            .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);

            if (basket == null) return NotFound();
            return basket;
        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            // TODO:
            // 1. Get basket
            // 1B. If basket doesnt exist -> create one
            // 2. Get product
            // 3. Add item
            // 4. Save changes
            return StatusCode(201);
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            // TODO:
            // 1. Get basket
            // 2. Remove the item or reduce its quantity
            // 3. Save changes

            return Ok();
        }

    }
}