import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'

interface ImageData {
  url: string;
}

interface ApiResponse {
  data: ImageData;
}

function Textarea() {
  const [description, setDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post<ApiResponse>('https://api.openai.com/v1/images/generations', {
        prompt: `generate an image of a ${description} pet in the style of ${selectedStyle}`,
        model: 'dall-e',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
      setImageUrl(res.data.data.url);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="hero container">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left shadow-xxl shadow-indigo-300/50">
      {imageUrl && <Image src={imageUrl} alt="Generated pet" width={500} height={500} className="rounded-xl" />}
      {!imageUrl && 
        <Image 
          src="/images/dog-placeholder.png" 
          alt="placeholder"  
          width={400} 
          height={400}
          className="rounded-xl " 
        />
      }
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-#181B2C">
    <div className="card-body">
    <form onSubmit={handleSubmit}>
    <div className="form-control">
    <label className="label">
    <span className="text-zinc-300 text-2xl label-text">Describe your pet</span>
    </label>
    <textarea
    className="textarea textarea-bordered"
    placeholder="Brief description about your dog"
    onChange={(e) => setDescription(e.target.value)}
    >
    </textarea>
    </div>
    <div className="w-full max-w-xs">
    <label className="block text-zinc-300 font-medium mb-2">
    Pick your favorite style
    </label>
    <select
    className="w-full border bg-[#181B2C] text-zinc-300 border-gray-400 p-2 rounded-md"
    onChange={(e) => setSelectedStyle(e.target.value)}
    >
    <option value="" disabled selected>Pick one</option>
    <option value="Salvador Dali">Salvador Dali</option>
    <option value="Norman Rockwell">Norman Rockwell</option>
    <option value="Banksy">Banksy</option>
    <option value="Tim Burton">Tim Burton</option>
    <option value="Van Gogh">Van Gogh</option>
    <option value="Monet">Monet</option>
    <option value="8-bit Digital Art">8-bit Digital Art</option>
    <option value="Steampunk Art">Steampunk Art</option>
    <option value="Cyberpunk Art">Cyberpunk Art</option>
    <option value="Photorealism-e Art">Photorealism-e Art</option>
    <option value="Deco Art">Deco Art</option>
    </select>
    </div>
    <div className="form-control mt-6">
    <button 
                     className="btn btn-primary"
                     type="submit"
                   >
    Generate <span role="img" className="ml-2 animate-pulse" aria-label="magic wand">💫</span>
    </button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>

    )
    }
    
    export default Textarea;