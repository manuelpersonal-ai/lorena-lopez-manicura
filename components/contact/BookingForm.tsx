'use client';

import { useState, type FormEvent } from 'react';
import { getWhatsAppUrl } from '@/lib/config';

const SERVICIOS = [
  'Semipermanente',
  'Soft Gel',
  'Kapping',
  'Belleza de Pies',
  'Nail Art',
  'Retiro',
];

const HORARIOS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30',
];

interface FormData {
  nombre: string;
  servicio: string;
  fecha: string;
  horario: string;
  whatsapp: string;
  comentarios: string;
}

const initial: FormData = {
  nombre: '',
  servicio: '',
  fecha: '',
  horario: '',
  whatsapp: '',
  comentarios: '',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: 500,
  color: 'var(--color-espresso)',
  marginBottom: '0.375rem',
};

export function BookingForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const mensaje =
      `Hola Lorena! Te escribo desde tu web para reservar un turno:\n\n` +
      `👤 Nombre: ${form.nombre}\n` +
      `💅 Servicio: ${form.servicio}\n` +
      `📅 Fecha preferida: ${form.fecha}\n` +
      `🕐 Horario: ${form.horario}\n` +
      `📱 Mi WhatsApp: ${form.whatsapp}` +
      (form.comentarios ? `\n💬 Comentarios: ${form.comentarios}` : '');

    window.open(getWhatsAppUrl(mensaje), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: 'var(--color-parchment)',
          border: '1px solid var(--color-bone)',
          borderRadius: 'var(--radius-2xl)',
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</p>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            fontWeight: 400,
            color: 'var(--color-espresso)',
            marginBottom: '0.75rem',
          }}
        >
          ¡Mensaje listo!
        </h3>
        <p style={{ color: 'var(--color-mocha)', lineHeight: 1.6 }}>
          Se abrió WhatsApp con tu consulta pre-armada. Solo enviá el mensaje
          y Lorena te confirma el turno.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{
            marginTop: '1.5rem',
            fontSize: '0.875rem',
            color: 'var(--color-mocha)',
            background: 'none',
            border: 'none',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Hacer otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" style={labelStyle}>
          Nombre completo <span style={{ color: 'var(--color-rose-blush)' }}>*</span>
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          className="booking-input"
        />
      </div>

      {/* Servicio */}
      <div>
        <label htmlFor="servicio" style={labelStyle}>
          Servicio deseado <span style={{ color: 'var(--color-rose-blush)' }}>*</span>
        </label>
        <select
          id="servicio"
          name="servicio"
          required
          value={form.servicio}
          onChange={handleChange}
          className="booking-input"
          style={{ color: form.servicio ? 'var(--color-espresso)' : 'var(--color-dust)' }}
        >
          <option value="" disabled>
            ¿Qué servicio te interesa?
          </option>
          {SERVICIOS.map((s) => (
            <option key={s} value={s} style={{ color: 'var(--color-espresso)' }}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Fecha y horario en fila */}
      <div className="booking-date-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label htmlFor="fecha" style={labelStyle}>
            Fecha preferida <span style={{ color: 'var(--color-rose-blush)' }}>*</span>
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            required
            value={form.fecha}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="booking-input"
          />
        </div>
        <div>
          <label htmlFor="horario" style={labelStyle}>
            Horario <span style={{ color: 'var(--color-rose-blush)' }}>*</span>
          </label>
          <select
            id="horario"
            name="horario"
            required
            value={form.horario}
            onChange={handleChange}
            className="booking-input"
            style={{ color: form.horario ? 'var(--color-espresso)' : 'var(--color-dust)' }}
          >
            <option value="" disabled>
              Elegí un horario
            </option>
            {HORARIOS.map((h) => (
              <option key={h} value={h} style={{ color: 'var(--color-espresso)' }}>
                {h} hs
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" style={labelStyle}>
          Tu WhatsApp <span style={{ color: 'var(--color-rose-blush)' }}>*</span>
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          placeholder="11 1234-5678"
          value={form.whatsapp}
          onChange={handleChange}
          className="booking-input"
        />
      </div>

      {/* Comentarios */}
      <div>
        <label htmlFor="comentarios" style={labelStyle}>
          Comentarios
          <span style={{ color: 'var(--color-dust)', fontWeight: 400, marginLeft: '0.375rem' }}>
            (opcional)
          </span>
        </label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows={3}
          placeholder="¿Tenés algún diseño en mente? ¿Alguna consulta extra?"
          value={form.comentarios}
          onChange={handleChange}
          className="booking-input"
          style={{ resize: 'vertical', minHeight: '80px' }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="booking-submit"
      >
        Enviar por WhatsApp →
      </button>
    </form>
  );
}
