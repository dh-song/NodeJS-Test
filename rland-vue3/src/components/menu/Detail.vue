<script>
export default {
    data() {
        return {
            menu:{
                name:"null"
            }
        }
    },
    mounted() {
        console.log("mounted");
        // fetch(`http://localhost:8080/menus/${this.$route.query.id}`)
        fetch(`http://localhost:8080/menus/${this.$route.params.id}`)
            .then(response => response.json())
            .then(result => this.menu = result)
            .catch(error => console.log('error', error));
    },
    updated(){
        console.log("updated");
    }
}

</script>

<style scoped>
@import url(/css/component/menu-detail.css);
@import url(/css/component/nutrition-info.css);
</style>
<template>
    <main class="main-padding-none" v-show="menu" >
        <section>
            <h1 class="d-none">알랜드 메뉴 상세정보</h1>

            <section class="cart">
                <h1 class="d-none">장바구니</h1>
                <span class="text-title3">커피음료</span>
                <div class="icon icon-basket">1</div>
            </section>

            <section>
                <div class="menu-detail">
                    <header>
                        <h1 class="d-none">수제청</h1>
                        <div class="img-div">
                            <!-- <img alt="" th:src="'/image/menu/'+${menu.img}" src="https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"> -->
                            <img alt=""
                            :src="'/image/product/'+menu.img">
                        </div>
                    </header>
                    <article>
                        <header>
                            <h1 class="text-title2">{{menu.name}}</h1>
                            <span class="text-normal">{{menu.price}}원</span>
                        </header>
                        <p class="text-normal" v-html="menu.description">
                        </p>
                    </article>

                    <div class="tab-div">
                        <a href="" class="btn border-bottom-0 btn-size-1">Default 크기</a>
                        <a href="" class="btn border-bottom-0 border-left-0 btn-size-1">Large 크기</a>
                    </div>

                    <section class="nutrition-info">
                        <header>
                            <div class="common-p">
                                <h1 class="text-normal">영양정보</h1>
                                <div class="">총량 300ml</div>
                            </div>
                        </header>
                        <ul class="common-p">
                            <li>
                                <span>포화지방</span>
                                <span>2 g</span>
                            </li>
                            <li>
                                <span>단백질</span>
                                <span>2 g</span>
                            </li>
                            <li>
                                <span>나트륨</span>
                                <span>2 mg</span>
                            </li>
                            <li>
                                <span>당</span>
                                <span>2 g</span>
                            </li>
                            <li>
                                <span>카페인</span>
                                <span>2 mg</span>
                            </li>
                        </ul>
                    </section>
                    <section class="nutrition-info">
                        <header>
                            <div class="common-p">
                                <h1 class="text-normal">영양정보</h1>
                                <div class="">총량 500ml</div>
                            </div>
                        </header>
                        <ul class="common-p">
                            <li>
                                <span>포화지방</span>
                                <span>4 g</span>
                            </li>
                            <li>
                                <span>단백질</span>
                                <span>4 g</span>
                            </li>
                            <li>
                                <span>나트륨</span>
                                <span>4 mg</span>
                            </li>
                            <li>
                                <span>당</span>
                                <span>4 g</span>
                            </li>
                            <li>
                                <span>카페인</span>
                                <span>4 mg</span>
                            </li>
                        </ul>
                    </section>

                </div>

                <div>
                    <a href="" class="btn btn-cancel btn-cancel-lg btn-size-1 btn-size-2-lg">담기</a>
                    <a href="" class="btn btn-default btn-default-lg btn-size-1 btn-size-2-lg">주문하기</a>
                </div>

            <section class="menu-rcmd">
                <header>
                    <h1 class="d-none">추천 메뉴</h1>
                        <span>함께 시키면 맛나요! ^^</span>
                    </header>

                    <div>
                        <a href="">
                            <img class="image-view-round"
                                src="https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="">
                            <span>아몬드 쿠키</span>
                        </a>
                    </div>
                </section>
            </section>

            <section class="new-menu detail-section-p">
                <h1 class="d-none">신메뉴 목록</h1>
                <!-- <ul>
                        <li>
                        </li>
                    </ul>  -->
                <div class="list">
                    <span>신규로 출시된 메뉴가 없습니다.</span>
                </div>
            </section>

        </section>

    </main>
</template>