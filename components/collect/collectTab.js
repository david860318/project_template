import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import collectStyles from '@/styles/collect.module.css';

// icon
import { TbHeartMinus } from 'react-icons/tb';

const FILTER_OPTIONS = ['全部', '北部地區', '中部地區', '南部地區', '東部地區'];
const PRODUCT_OPTIONS = ['全部', '帳篷', '露營椅'];

export default function ControllTab() {
  const [key, setKey] = useState('camp');

  // 彈出視窗
  const [cancelModal, setCancelModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 處理表單提交
    // console.log('取消收藏');
    setCancelModal(false);
  };

  // 篩選
  const [regionFilter, setRegionFilter] = useState('全部');
  const [productFilter, setProductFilter] = useState('全部');

  const handleRegionFilterChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const handleProductFilterChange = (event) => {
    setProductFilter(event.target.value);
  };

  // 資料庫
  const cardData = [
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
  ];

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className={collectStyles.tabsStyle}
      id="collectTabs"
    >
      <Tab
        eventKey="camp"
        title={<span className={collectStyles.customTab}>營地</span>}
        className={collectStyles.tabStyle}
      >
        <div className={collectStyles.filterContainer}>
          {FILTER_OPTIONS.map((option) => (
            <div key={option} className={collectStyles.filterOption}>
              <input
                type="radio"
                id={`region-${option}`}
                name="regionFilter"
                value={option}
                checked={regionFilter === option}
                onChange={handleRegionFilterChange}
                className={collectStyles.filterRadio}
              />
              <label
                htmlFor={`region-${option}`}
                className={collectStyles.filterLabel}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className={collectStyles.campContent}>
          {cardData
            .filter(
              (card) =>
                card.type === 'camp' &&
                (regionFilter === '全部' || card.label === regionFilter)
            )
            .map((card, index) => (
              <Card key={index} className={collectStyles.CardStyle}>
                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  className={collectStyles.CardImg}
                />
                <Card.Body className={collectStyles.CardBodyStyle}>
                  <div className={collectStyles.CardHStyle}>
                    <div>
                      <div>{card.title}</div>
                      <div className={collectStyles.CardTitleStyle}>
                        <div className={collectStyles.CardTitle1Style}>
                          標籤
                        </div>
                        <div className={collectStyles.CardTitle2Style}>
                          {card.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    variant="primary"
                    className={collectStyles.CardBtn}
                    onClick={() => setCancelModal(true)}
                  >
                    <TbHeartMinus className={collectStyles.CardIcon} />
                  </button>
                </Card.Body>
              </Card>
            ))}
          {/* 是否取消收藏 */}
          {cancelModal && (
            <div className={collectStyles.modalBackdrop}>
              <div className={collectStyles.modalContent}>
                <form className={collectStyles.form} onSubmit={handleSubmit}>
                  <div className={collectStyles.cancelH}>是否取消收藏 ?</div>
                  <div className={collectStyles.submitGroup}>
                    <div className={collectStyles.submitDiv}>
                      <button
                        className={collectStyles.backButton}
                        onClick={() => setCancelModal(false)}
                      >
                        否
                      </button>
                      <button className={collectStyles.cancelButton}>是</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Tab>

      {/* 露營用品 */}
      <Tab
        eventKey="profile"
        title={<span className={collectStyles.customTab}>露營用品</span>}
        className={collectStyles.tabStyle}
      >
        <div className={collectStyles.filterContainer}>
          {PRODUCT_OPTIONS.map((option) => (
            <div key={option} className={collectStyles.filterOption}>
              <input
                type="radio"
                id={`product-${option}`}
                name="productFilter"
                value={option}
                checked={productFilter === option}
                onChange={handleProductFilterChange}
                className={collectStyles.filterRadio}
              />
              <label
                htmlFor={`product-${option}`}
                className={collectStyles.filterLabel}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className={collectStyles.campContent}>
          {cardData
            .filter(
              (card) =>
                card.type === 'product' &&
                (productFilter === '全部' || card.label === productFilter)
            )
            .map((card, index) => (
              <Card key={index} className={collectStyles.CardStyle}>
                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  className={collectStyles.CardImg}
                />
                <Card.Body className={collectStyles.CardBody2Style}>
                  <div>
                    <div className={collectStyles.CardH2Style}>
                      {card.title}
                    </div>
                    <div className={collectStyles.CardTitleStyle}>
                      <div className={collectStyles.CardTitle1Style}>
                        {card.label}
                      </div>
                      <div className={collectStyles.CardTitle3Style}>
                        {card.label}
                      </div>
                    </div>
                  </div>
                  <button variant="primary" className={collectStyles.CardBtn}>
                    <TbHeartMinus className={collectStyles.CardIcon2} />
                  </button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </Tab>
    </Tabs>
  );
}
