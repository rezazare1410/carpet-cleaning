'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './create-post.css';

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    date: '',
    excerpt: '',
    content: '',
    category: '',
    sortDate: null, // ✅ تاریخ میلادی برای مرتب‌سازی
  });

  const [generatedJSON, setGeneratedJSON] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateJSON = () => {
    const output = {
      ...formData,
      sortDate: formData.sortDate
        ? new Date(formData.sortDate).toISOString()
        : ''
    };

    const json = JSON.stringify(output, null, 2);
    setGeneratedJSON(json);
  };

  return (
    <div className="create-post-container">
      <h1>فرم ساخت مقاله جدید</h1>

      <div className="form-group">
        <label>slug (برای URL):</label>
        <input name="slug" onChange={handleChange} value={formData.slug} />
      </div>

      <div className="form-group">
        <label>عنوان مقاله:</label>
        <input name="title" onChange={handleChange} value={formData.title} />
      </div>

      <div className="form-group">
        <label>تاریخ شمسی (مثلاً ۸ فروردین ۱۴۰۴):</label>
        <input name="date" onChange={handleChange} value={formData.date} />
      </div>

      <div className="form-group">
        <label>تاریخ میلادی (برای مرتب‌سازی):</label>
        <DatePicker
          selected={formData.sortDate}
          onChange={(date) => setFormData({ ...formData, sortDate: date })}
          dateFormat="yyyy-MM-dd"
          placeholderText="تاریخ را انتخاب کنید"
          className="date-picker-input"
        />
      </div>

      <div className="form-group">
        <label>خلاصه مقاله:</label>
        <textarea
          name="excerpt"
          rows="3"
          onChange={handleChange}
          value={formData.excerpt}
        />
      </div>

      <div className="form-group">
        <label>متن کامل مقاله (HTML):</label>
        <textarea
          name="content"
          rows="6"
          onChange={handleChange}
          value={formData.content}
        />
      </div>

      <div className="form-group">
        <label>دسته‌بندی مقاله:</label>
        <input
          name="category"
          onChange={handleChange}
          value={formData.category}
        />
      </div>

      <button onClick={generateJSON}>تولید JSON</button>

      {generatedJSON && (
        <>
          <h2>کد JSON آماده:</h2>
          <pre className="json-output">{generatedJSON}</pre>
        </>
      )}
    </div>
  );
}
