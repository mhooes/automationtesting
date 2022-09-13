/// <reference types="Cypress" />

describe('Home page automation test', () => {
  beforeEach(() => {
    cy.viewport(1600, 900)
    cy.visit('https://practice.automationtesting.in');
    cy.title().should('contains', 'Automation Practice Site');
  });

          it('Home Page with three Sliders only', () => {
              cy.get('#n2-ss-6-align').find('.n2-ss-slide-fill').should('have.length', 3);
          });
      
        it('Home page with three Arrivals only', () => {
          cy.get('.module_row_1 > .row_inner_wrapper').find('.attachment-shop_catalog').should('have.length', 3);
        });
      
        it('Images in Arrivals should navigate', () => {
          cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
          cy.get('.single_add_to_cart_button').should('exist');
        });
      
        it('Arrivals-Images-Description', () => {
          cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
          cy.get('.single_add_to_cart_button').should('exist');
          cy.get('.woocommerce-tabs').find('.description_tab').should('have.class', 'active');
          cy.get('#tab-description').find('h2').should('have.text', 'Product Description');
        });
      
        it('Arrivals-Images-Reviews', () => {
          cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
          cy.get('.single_add_to_cart_button').should('exist');
          cy.get('.woocommerce-tabs').find('.reviews_tab').click().should('have.class', 'active');
          cy.get('#tab-reviews').find('h2').should('have.text', 'Reviews');
        });
      
        it('Arrivals-Images-Add to Basket', () => {
          cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
          cy.get('.single_add_to_cart_button').should('exist').click();
          cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
          cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item');    
        });
      
      it('Arrivals-Add to Basket with more books', () => {
        cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
        cy.get('.quantity').find('input').invoke('attr', 'max').then($max => {
          const max = parseInt($max) + 1;
          cy.get('.quantity').find('input').should('exist').clear().type(max);
          cy.get('.quantity').find('input').invoke('prop', 'validationMessage').should((value) => {
            expect(value).to.equal('Value must be less than or equal to ' + (max - 1) + '.');
          });
    
        })
    
      });
    
      it('Arrivals-Add to Basket-Items', () => {
        cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
        cy.get('.single_add_to_cart_button').should('exist').click();
        cy.wait(500)
        cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
        cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
        cy.url().should('contain','basket/');   
      });
    
      it('Add to Basket-Items-Coupon', () => {
        cy.get('.post-160 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
        cy.get('.single_add_to_cart_button').should('exist').click();
        cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
        cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
        cy.url().should('contain','basket/'); 
        cy.get('.coupon').find('#coupon_code').type('krishnasakinala {enter}');
        cy.get('.cart-discount').should('be.visible').and('exist')  
      });
    
      it('Add to Basket-Items-Coupon value<450', () => {
        cy.get('.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
        cy.get('.single_add_to_cart_button').should('exist').click();
        cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
        cy.wait(500)
        cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
        cy.url().should('contain','basket/'); 
        cy.get('.coupon').find('#coupon_code').type('krishnasakinala {enter}');
        cy.get('.woocommerce-error > li').should('have.text', 'The minimum spend for this coupon is ₹450.00.')
        cy.get('.cart-discount').should('not.exist')  
      });
    
      it('Add to Basket-Items-Remove book', () => {
        cy.get('.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
        cy.get('.single_add_to_cart_button').should('exist').click();
        cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
        cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
        cy.url().should('contain','basket/'); 
        cy.get('.remove').click();
        cy.get('.woocommerce-message').should('have.text', 'Mastering JavaScript removed. Undo?')
      });

    it('Add to Basket-Items-Add book', () => {
      cy.get('.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist').click();
      cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
      cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
      cy.url().should('contain', 'basket/');
      cy.get('.quantity').find('input').clear().type('2 {enter}')
      cy.xpath('//*[@id="page-34"]/div/div[1]/form/table/tbody/tr[1]/td[4]/span/text()').then($PRICE => {
        const PRICE = $PRICE;
        cy.xpath('//*[@id="page-34"]/div/div[1]/form/table/tbody/tr[1]/td[6]/span').should((value) => {
          expect(value).to.contain('700');
        });

      });

    });

    it('Arrivals-Add to Basket-Items-Check-out-Total & Sub-total condition', () => {
      cy.get('.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist').click();
      cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
      cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
      cy.url().should('contain', 'basket/');
      cy.get('.quantity').find('input').clear().type('2 {enter}')
      cy.xpath('//*[@id="page-34"]/div/div[1]/form/table/tbody/tr[1]/td[4]/span/text()').then($PRICE => {
        const PRICE = $PRICE;
        cy.get('.order-total > td:nth-child(2) > strong:nth-child(1) > span:nth-child(1)').should((value) => {
          expect(value).to.contain(714);
        });

      });

    }); 

    it('Arrivals-Add to Basket-Items-Check-out-Total & Sub-total condition', () => {
      cy.get('.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
      cy.get('.single_add_to_cart_button').should('exist').click();
      cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
      cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
      cy.url().should('contain', 'basket/');
      cy.get('.checkout-button').click();
      cy.url().should('contain', 'checkout/')

    }); 

  it('Arrivals-Add to Basket-Items-Check-out-Payment Gateway', () => {
    cy.get('.post-165 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
    cy.get('.single_add_to_cart_button').should('exist').click();
    cy.get('.woocommerce-message').should('contain', 'has been added to your basket');
    cy.get('#wpmenucartli').find('.cartcontents').should('contain', '1 item').click();
    cy.url().should('contain', 'basket/');
    cy.get('.checkout-button').click();
    cy.url().should('contain', 'checkout/')
    cy.get('#billing_first_name').type('Emiliano');
    cy.get('#billing_last_name').type('Palacio');
    cy.get('#billing_email').type('pasda@gmail.com');
    cy.get('#billing_phone_field').type('112234646');
    cy.get('#s2id_billing_country').click();
    cy.get('#s2id_autogen1_search').type('Argentina{enter}');
    cy.get('#billing_address_1').type('asdqweasdf');
    cy.get('#billing_city').type('Moron');
    cy.get('#select2-chosen-2').click();
    cy.get('#s2id_autogen2_search').type('Buenos Aires{enter}');
    cy.get('#billing_postcode').type('12323');
    cy.get('#payment_method_cod').check()
    cy.get('#place_order').click()
    cy.url().should('contain', 'order-received/')
  });

})